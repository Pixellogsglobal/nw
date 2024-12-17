import { Request, Response } from 'express';
import { Client, IClient } from '../models/Client';

export const clientController = {
  // Create a new client
  async create(req: Request, res: Response) {
    try {
      const client = new Client(req.body);
      await client.save();
      res.status(201).json(client);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create client' });
    }
  },

  // Get all clients with pagination
  async getAll(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const status = req.query.status;

      const query = status ? { status } : {};
      
      const clients = await Client.find(query)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);

      const total = await Client.countDocuments(query);

      res.json({
        clients,
        total,
        pages: Math.ceil(total / limit),
        currentPage: page
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch clients' });
    }
  },

  // Get a single client by ID
  async getById(req: Request, res: Response) {
    try {
      const client = await Client.findById(req.params.id);
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json(client);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch client' });
    }
  },

  // Update a client
  async update(req: Request, res: Response) {
    try {
      const client = await Client.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json(client);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update client' });
    }
  },

  // Add consultation record
  async addConsultation(req: Request, res: Response) {
    try {
      const client = await Client.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            consultationHistory: {
              date: new Date(),
              type: req.body.type,
              notes: req.body.notes
            }
          }
        },
        { new: true }
      );
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json(client);
    } catch (error) {
      res.status(400).json({ error: 'Failed to add consultation' });
    }
  },

  // Add document
  async addDocument(req: Request, res: Response) {
    try {
      const client = await Client.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            documents: {
              name: req.body.name,
              type: req.body.type,
              url: req.body.url,
              uploadedAt: new Date()
            }
          }
        },
        { new: true }
      );
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json(client);
    } catch (error) {
      res.status(400).json({ error: 'Failed to add document' });
    }
  },

  // Delete a client
  async delete(req: Request, res: Response) {
    try {
      const client = await Client.findByIdAndDelete(req.params.id);
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json({ message: 'Client deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete client' });
    }
  }
};