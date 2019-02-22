import { Notification } from './Notification';

export type KeyOfListener<T extends object> = {
    [K in keyof T]: T[K] extends ((...args: infer P) => void)
        ? P extends [Notification] | [] ? K : never
        : never;
}[keyof T];

export type NotificationListener = (notification: Notification<any>) => void;

export interface NotificationObserver {
    observer: any;
    name: string;
    object: object | null;
    listener: string | NotificationListener;
}

/**
 * A notification dispatch mechanism that enables the broadcast of information to registered observers.
 */
export class NotificationCenter {
    private static defaultCenter: NotificationCenter;
    protected list: NotificationObserver[] = [];

    listener?: () => void;
    listeners?: Array<() => void>;

    /**
     * Returns the default notification center.
     */
    static get default(): NotificationCenter {
        if (typeof this.defaultCenter === 'undefined') {
            this.defaultCenter = new this();
        }

        return this.defaultCenter;
    }

    /**
     * Adds an entry to the notification center and returns an opaque object to act as the observer.
     * @param forName - The name of the notification for which to register the observer.
     * @param object - The object whose notifications the observer wants to receive.
     * @param listener - The callback which will be notified when the notification posted.
     * @example
     * const token = NotificationCenter.default.addObserver('update', null, (notification) => {
     *     console.log('Update');
     * });
     * @returns An opaque object to act as the observer.
     */
    addObserver<T>(forName: string, object: object | null, listener: (notification: Notification<T>) => void): object;
    /**
     * Adds an entry to the notification center with an observer and a notification selector.
     * @param observer - Object registering as an observer.
     * @param name - The name of the notification for which to register the observer.
     * @param object - The object whose notifications the observer wants to receive.
     * @param selector - The name of method which will be notified when the notification posted.
     * @example
     * class Component {
     *     protected data: string = '';
     *
     *     listen() {
     *         // Cannot infer keys of listener from "this-type", use generic <Component> instead.
     *         NotificationCenter.default.addObserver<Component>(this, 'update', null, 'onNotify');
     *     }
     *
     *     onNotify(notification: Notification<string>) {
     *         this.setData(notification.data);
     *     }
     *
     *     setData(data: string): void {
     *         this.data = data;
     *     }
     * }
     *
     * const component = new Component();
     *
     * NotificationCenter.default.addObserver(component, 'update', null, 'onNotify');
     */
    addObserver<T extends object>(observer: T, name: string, object: object | null, selector: KeyOfListener<T>): void;
    /**
     * Adds an entry to the notification center with an observer and a callback.
     * @param observer - Object registering as an observer.
     * @param name - The name of the notification for which to register the observer.
     * @param object - The object whose notifications the observer wants to receive.
     * @param listener - The callback which will be notified when the notification posted.
     */
    addObserver<T>(observer: object, name: string, object: object | null, listener: (...args: any[]) => void): void;
    /**
     * Adds an entry to the notification center.
     */
    addObserver(observer: object | string, name: any, object: any, selector?: any): void | object {
        let shouldReturnObserver = false;

        if (typeof observer === 'string') {
            selector = object;
            object = name;
            name = observer;
            observer = Object.create(null);

            shouldReturnObserver = true;
        }

        this.list.push({
            name,
            observer,
            object,
            listener: selector,
        });

        if (shouldReturnObserver) {
            return observer as object;
        }
    }

    /**
     * Removes all entries specifying a given observer from the notification center.
     * @param observer - The notification observer.
     */
    removeObserver(observer: object): void;
    /**
     * Removes all entries specifying a given observer and notification name from the notification center.
     * @param observer - The notification observer.
     * @param name - The name of the notification.
     */
    removeObserver(observer: object, name: string): void
    /**
     * Removes all entries specifying a given observer and notification object from the notification center.
     * @param observer - The notification observer.
     * @param object - The object posting the notification.
     */
    removeObserver(observer: object, object: object): void
    /**
     * Removes all entries specifying a given observer, notification name and object from the notification center.
     * @param observer - The notification observer.
     * @param name - The name of the notification.
     * @param object - The object posting the notification.
     */
    removeObserver(observer: object, name: string, object: object): void
    /**
     * Removes entries from the notification center.
     */
    removeObserver(observer: object, name?: object | string, object?: object): void {
        if (typeof name === 'object') {
            object = name;
            name = undefined;
        }

        this.list = this.list.filter((receiver) => {
            if (receiver.observer !== observer) {
                return true;
            }

            if (name && object) {
                return receiver.name !== name || receiver.object !== object;
            }

            if (name) {
                return receiver.name !== name;
            }

            if (object) {
                return receiver.object !== object;
            }

            return false;
        });
    }

    /**
     * Posts a given notification to the notification center.
     * @param notification - The notification to be posted.
     */
    post(notification: Notification<any>): void;
    /**
     * Creates a notification with a given name, object, and data and posts it to the notification center.
     * @param name - The name of the notification.
     * @param object - The object posting the notification.
     * @param data - Optional data about the the notification.
     */
    post(name: string, object: object | null, data: any): void;
    /**
     * Creates a notification with a given name and object and posts it to the notification center.
     * @param name - The name of the notification.
     * @param object - The object posting the notification.
     */
    post(name: string, object?: object): void;
    /**
     * Posts notification to the notification center.
     */
    post(name: string | Notification, object?: object | null, data?: any): void {
        let notification: Notification;

        if (typeof name === 'string') {
            if (typeof object === 'undefined') {
                object = null;
            }

            notification = new Notification(name, object, data);
        } else {
            notification = name;
            name = notification.name;
            object = notification.object;
        }

        for (const receiver of this.list) {
            if (receiver.name !== name) {
                continue;
            }

            if (receiver.object !== object && receiver.object) {
                continue;
            }

            if (typeof receiver.listener === 'string') {
                receiver.observer[receiver.listener].call(receiver.observer, notification);
            } else {
                receiver.listener.call(null, notification);
            }
        }
    }
}
