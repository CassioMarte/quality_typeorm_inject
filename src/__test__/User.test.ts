import { Express } from 'express';
import request from 'supertest';
import { createApp } from '../app';
import { AppDataSource } from '../database/AppDataSource';

let app: Express;

beforeAll(async () => {
  await AppDataSource.initialize();
  app = await createApp();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

//'should be able to refresh a token'

describe('User Routes', () => {
  beforeEach(async () => {
    const entities = AppDataSource.entityMetadatas;
    for (const entity of entities) {
      const repository = AppDataSource.getRepository(entity.name);
      await repository.clear();
    }
  });

  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Teste',
      email: 'teste@teste.com',
      phone: '51999999999',
    });

    expect(response.status).toBe(201)
  });
});
