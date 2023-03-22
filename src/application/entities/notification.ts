export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notifications {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: string) {
    this.props.content;
  }

  public get content(): string {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
