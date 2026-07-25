import { Router } from 'express';
import Contact from '../models/Contact.js';

const router = Router();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactBody(body) {
  const errors = [];
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const services = typeof body.services === 'string' ? body.services.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name) errors.push('Name is required.');
  if (!email) errors.push('Email is required.');
  else if (!EMAIL_REGEX.test(email)) errors.push('Email format is invalid.');
  if (!services) errors.push('Services is required.');
  if (!message) errors.push('Message is required.');

  return { errors, data: { name, email, services, message } };
}

/** Verify MongoDB `contacts` collection (dev / smoke test). */
router.get('/check', async (_req, res) => {
  try {
    const count = await Contact.countDocuments();
    const latest = await Contact.findOne()
      .sort({ createdAt: -1 })
      .select('name email services createdAt')
      .lean();

    return res.json({
      success: true,
      collection: 'contacts',
      count,
      latest: latest || null,
    });
  } catch (err) {
    console.error('Contact check error:', err);
    return res.status(500).json({
      success: false,
      message: 'Could not read contacts from database.',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { errors, data } = validateContactBody(req.body);

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: errors.join(' '),
      });
    }

    const contact = await Contact.create(data);

    return res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully.',
      id: contact._id,
    });
  } catch (err) {
    console.error('Contact submission error:', err);
    return res.status(500).json({
      success: false,
      message: 'Unable to save your message. Please try again later.',
    });
  }
});

export default router;
