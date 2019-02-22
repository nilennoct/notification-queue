/**
 * A container for information broadcast through a notification center to all registered observers.
 * @typeparam T - The type of data.
 */
export class Notification<T = void> {
    readonly name: string;
    readonly object: object | null;
    readonly data: T;

    /**
     * Initializes a new notification.
     * @param name - The name of notification.
     * @param object - An object that the poster wishes to send to observers.
     */
    constructor(name: string, object?: object);
    /**
     * Initializes a new notification.
     * @param name - The name of notification.
     * @param object - An object that the poster wishes to send to observers.
     * @param data - Optional data about the the notification.
     */
    constructor(name: string, object: object | null, data: T);
    /**
     * Initializes a new notification.
     */
    constructor(name: string, object?: object | null, data?: T) {
        this.name = name;
        this.object = typeof object === 'undefined' ? null : object;
        this.data = data!;
    }
}
