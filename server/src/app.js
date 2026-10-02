import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Security and utility middleware
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Health check endpoint conforming to AGENT.md specification
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'SnapItShot API is running',
    timestamp: new Date().toISOString(),
  });
});

// Settings endpoint
app.get('/api/settings', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      brandName: "SnapItShot",
      photographerName: "Abhishek Arya",
      location: "Based in India — Available Worldwide",
      email: "hello@snapitshot.com",
      phone: "+91 98765 43210",
      instagram: "snapitshot.arya",
      specialties: ["Portraits", "Weddings", "Travel", "Landscapes", "Lifestyle"],
    }
  });
});

// Inquiries endpoint
app.post('/api/inquiries', (req, res) => {
  const { name, email, projectType, message } = req.body;
  
  if (!name || !email || !projectType || !message) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please supply name, email, projectType, and message.',
      errors: {
        name: !name ? 'Name is required' : undefined,
        email: !email ? 'Email is required' : undefined,
        projectType: !projectType ? 'Project type is required' : undefined,
        message: !message ? 'Message is required' : undefined,
      }
    });
  }

  console.log('[Inquiry Received]', req.body);

  return res.status(201).json({
    success: true,
    message: 'Thank you. I have received your message and will respond shortly.',
    data: {
      id: 'inq_' + Date.now(),
      ...req.body,
      createdAt: new Date().toISOString()
    }
  });
});

// Fallback 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.originalUrl} not found`,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('[API Error]', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

export default app;
