import React, { useState, useEffect, useRef } from 'react';
import { Send, Headset, MessageSquare, Mail, Phone, Sparkles } from 'lucide-react';
import './HelpDesk.css';

const HelpDesk = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Interior Studio Help Desk. I'm your AI design assistant. How can I help you today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showQuickActions: true
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickActions = [
    { label: "Request a Quote", value: "I'd like to request a quote for my project." },
    { label: "Design Process", value: "Tell me more about your design process." },
    { label: "Check Status", value: "I want to check the status of my ongoing project." },
    { label: "Booking", value: "How do I book a consultation?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      text: text,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Mock bot response logic
    setTimeout(() => {
      let botResponse = "Thank you for reaching out! A human designer will review your message and get back to you within 24 hours. Is there anything else you'd like to know?";

      if (text.toLowerCase().includes('quote')) {
        botResponse = "We'd love to provide a quote! To give you an accurate estimate, could you tell me a bit about the space (residential or commercial) and your approximate budget?";
      } else if (text.toLowerCase().includes('process')) {
        botResponse = "Our process is divided into 4 main phases: Discovery & Concept, Design Development, Technical Planning, and Execution. You can find more details on our About page!";
      } else if (text.toLowerCase().includes('status')) {
        botResponse = "To check your project status, please provide your Project ID or the email address used during booking.";
      } else if (text.toLowerCase().includes('book') || text.toLowerCase().includes('consultation')) {
        botResponse = "You can book a free 30-minute consultation directly through our website. Would you like me to send you the link to our booking calendar?";
      }

      const botMsg = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div className="help-desk-page">
      <header className="page-header premium-header">
        <div className="container animate-fade-in">
          <span className="subtitle-top">24/7 Support</span>
          <h1>Help Desk & Chat</h1>
          <p className="section-subtitle">Need immediate assistance? Our design consultants are here to help you navigate your journey.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="chat-interface animate-fade-in-up">
            <div className="chat-header">
              <div className="bot-info">
                <div className="bot-avatar">
                  <Headset size={24} />
                  <span className="status-indicator"></span>
                </div>
                <div>
                  <h3>Design Concierge</h3>
                  <p>AI Assistant | Online</p>
                </div>
              </div>
              <Sparkles className="text-primary" size={20} />
            </div>

            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                  <div className="message-content">
                    <p>{msg.text}</p>
                    {msg.showQuickActions && (
                      <div className="quick-actions">
                        {quickActions.map((action, idx) => (
                          <button
                            key={idx}
                            className="quick-btn"
                            onClick={() => handleSend(action.value)}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                    <span className="message-time">{msg.time}</span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message-wrapper bot">
                  <div className="message-content typing">
                    <span>.</span><span>.</span><span>.</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-area" onSubmit={(e) => { e.preventDefault(); handleSend(input); }}>
              <input
                type="text"
                placeholder="Ask about your project..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="send-btn" disabled={!input.trim() || isTyping}>
                <Send size={20} />
              </button>
            </form>
          </div>

          <div className="support-channels grid-cols-3">
            <div className="channel-card">
              <Mail className="text-primary mb-4" size={32} />
              <h4>Email Support</h4>
              <p>support@Luxe Interiors.com</p>
              <p className="text-sm mt-2">Response within 24h</p>
            </div>
            <div className="channel-card">
              <MessageSquare className="text-primary mb-4" size={32} />
              <h4>WhatsApp</h4>
              <p>+1 (555) 123-4567</p>
              <p className="text-sm mt-2">Mon-Fri: 9am - 6pm</p>
            </div>
            <div className="channel-card">
              <Phone className="text-primary mb-4" size={32} />
              <h4>Phone</h4>
              <p>+1 (555) 987-6543</p>
              <p className="text-sm mt-2">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpDesk;
