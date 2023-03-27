import { Content } from './content';
import { Notifications } from './notification';

describe('Notification', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notifications({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
