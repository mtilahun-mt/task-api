import prisma from '../config/db.js';

export async function findAll({ completed } = {}) {
  // Only filter when completed was provided; otherwise return every task
  const where = completed === undefined ? {} : { completed };
  return prisma.task.findMany({ where });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
