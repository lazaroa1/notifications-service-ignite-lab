import { Controller, Get, Post, Body } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';
import { CreateNotificationBody } from './create.notification.body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, category, content } = body;
    console.log(body);
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
