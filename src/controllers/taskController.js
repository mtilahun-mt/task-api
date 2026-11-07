import { matchedData } from 'express-validator';
import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  // matchedData returns the sanitized query values (completed is a real boolean here)
  const { completed } = matchedData(req, { locations: ['query'] });
  const tasks = await taskService.getAllTasks({ completed });
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
