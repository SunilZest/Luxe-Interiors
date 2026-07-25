import dns from 'node:dns';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';

// Windows/local DNS often fails SRV lookups for mongodb+srv; use public resolvers.
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const app = express();
const PORT = process.env.PORT || 5000;

if (!process.env.MONGODB_URI && !process.env.MONGODB_URI_STANDARD) {
  console.error(
    'Set MONGODB_URI (or MONGODB_URI_STANDARD) in server/.env — see server/.env.example.'
  );
  process.exit(1);
}

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  const dbState = mongoose.connection.readyState;
  res.json({
    ok: dbState === 1,
    mongo: dbState === 1 ? 'connected' : 'disconnected',
  });
});

app.use('/api/contact', contactRoutes);

async function connectMongo() {
  const srvUri = process.env.MONGODB_URI;
  const standardUri = process.env.MONGODB_URI_STANDARD;
  const options = { serverSelectionTimeoutMS: 15000 };

  const isSrvDnsError = (err) =>
    err?.code === 'ECONNREFUSED' ||
    err?.syscall === 'querySrv' ||
    String(err?.message || '').includes('querySrv');

  if (srvUri) {
    try {
      await mongoose.connect(srvUri, options);
      return;
    } catch (err) {
      if (standardUri && isSrvDnsError(err)) {
        console.warn('mongodb+srv DNS failed; connecting with MONGODB_URI_STANDARD…');
        await mongoose.connect(standardUri, options);
        return;
      }
      throw err;
    }
  }

  if (standardUri) {
    await mongoose.connect(standardUri, options);
    return;
  }

  throw new Error('No MongoDB URI configured');
}

async function start() {
  try {
    await connectMongo();
    console.log('Connected to MongoDB Atlas');

    const server = app.listen(PORT, () => {
      console.log(`API listening on http://localhost:${PORT}`);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(
          `Port ${PORT} is already in use. Stop the other process or set PORT in server/.env.`
        );
      } else {
        console.error('Server error:', err.message);
      }
      process.exit(1);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
    if (String(process.env.MONGODB_URI || '').startsWith('mongodb+srv://')) {
      console.error(
        'Tip: If SRV/DNS errors persist, set MONGODB_URI_STANDARD in server/.env (see .env.example).'
      );
    }
    process.exit(1);
  }
}

start();
