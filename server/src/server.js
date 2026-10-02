import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './config/database.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to database
  await connectDB();

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SnapItShot Server] Running on http://localhost:${PORT}`);
    console.log(`[SnapItShot Health] http://localhost:${PORT}/api/health`);
  });
};

startServer();
