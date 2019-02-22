import { Notification } from '../src';

it('should init notification correctly', () => {
    const notification = new Notification('test');

    expect(notification.name).toBe('test');
    expect(notification.object).toBe(null);
    expect(notification.data).toBe(undefined);
});
