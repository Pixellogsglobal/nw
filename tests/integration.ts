import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Client } from '../server/models/Client';
import { Appointment } from '../server/models/Appointment';
import { logger } from '../server/utils/logger';

let mongoServer: MongoMemoryServer;

async function runTests() {
  try {
    // Setup in-memory MongoDB server
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    // Connect to in-memory database
    await mongoose.connect(mongoUri);
    logger.info('Connected to in-memory MongoDB');

    // Test data
    const testClient = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      educationLevel: 'Undergraduate',
      targetUniversities: ['Oxford University'],
      desiredCourses: ['Computer Science']
    };

    const testAppointment = {
      type: 'Initial Consultation',
      startTime: new Date('2024-03-20T10:00:00Z'),
      endTime: new Date('2024-03-20T11:00:00Z'),
      calendlyEventUri: 'test-event-uri',
      status: 'scheduled' as const
    };

    // Test 1: Create Client
    logger.info('Running Test 1: Create Client');
    const client = new Client(testClient);
    await client.save();
    logger.info('✓ Client created successfully:', client._id);

    // Test 2: Create Appointment
    logger.info('Running Test 2: Create Appointment');
    const appointment = new Appointment({
      ...testAppointment,
      clientId: client._id,
      consultantId: new mongoose.Types.ObjectId()
    });
    await appointment.save();
    logger.info('✓ Appointment created successfully:', appointment._id);

    // Test 3: Verify Appointment Details
    logger.info('Running Test 3: Verify Appointment');
    const savedAppointment = await Appointment.findById(appointment._id)
      .populate('clientId');
    
    if (!savedAppointment) {
      throw new Error('Appointment not found');
    }

    logger.info('✓ Appointment verification successful:', {
      clientName: `${savedAppointment.clientId.firstName} ${savedAppointment.clientId.lastName}`,
      type: savedAppointment.type,
      status: savedAppointment.status
    });

    // Cleanup
    await Appointment.deleteOne({ _id: appointment._id });
    await Client.deleteOne({ _id: client._id });
    logger.info('✓ Test data cleaned up successfully');

    logger.info('All tests passed! 🎉');

  } catch (error) {
    logger.error('Test failed:', error);
    process.exit(1);
  } finally {
    // Cleanup
    await mongoose.disconnect();
    await mongoServer.stop();
    logger.info('Test environment cleaned up');
  }
}

// Run tests
runTests();