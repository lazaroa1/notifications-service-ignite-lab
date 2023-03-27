import { Notifications } from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notification-repository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notifications[] = [];

  async create(notification: Notifications) {
    this.notifications.push(notification);
  }
}
