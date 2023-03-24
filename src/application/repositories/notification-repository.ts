import { Notifications } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notifications): Promise<void>;
}
