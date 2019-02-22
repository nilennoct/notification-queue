import asap from 'asap';
import { Notification } from './Notification';
import { NotificationCenter } from './NotificationCenter';

/**
 * The enum that specify how notifications are coalesced.
 */
export enum NotificationCoalescing {
    /** Do not coalesce notifications in the queue. */
    none = 0,
    /** Coalesce notifications with the same name. */
    onName = 1 << 0,
    /** Coalesce notifications with the same object. */
    onSender = 1 << 1,
}

/**
 * The enum that specify when notifications are posted.
 */
export enum PostingStyle {
    /** The notification is posted as soon as possible. */
    asap,
    /** The notification is posted immediately after coalescing. */
    now,
}

/**
 * @ignore
 */
const NotificationCoalescingOnNameAndSender = NotificationCoalescing.onName | NotificationCoalescing.onSender;

/**
 * @ignore
 */
const PREDICATES = {
    [NotificationCoalescing.onName]: (matching: Notification, notification: Notification) => matching.name !== notification.name,
    [NotificationCoalescing.onSender]: (matching: Notification, notification: Notification) => matching.object !== notification.object,
    [NotificationCoalescingOnNameAndSender]: (matching: Notification, notification: Notification) => matching.name !== notification.name || matching.object !== notification.object,
};

/**
 * A notification center buffer.
 */
export class NotificationQueue {
    private static defaultQueue: NotificationQueue;
    protected list: Notification[] = [];
    protected scheduled: boolean = false;

    constructor(protected readonly notificationCenter: NotificationCenter) {
    }

    /**
     * Returns the default notification queue.
     */
    static get default(): NotificationQueue {
        if (typeof this.defaultQueue === 'undefined') {
            this.defaultQueue = new NotificationQueue(NotificationCenter.default);
        }

        return this.defaultQueue;
    }

    /**
     * Adds a notification to the notification queue with a specified posting style, and coalesce only notifications that match both the notification’s name and object.
     * @param notification - The notification to add to the queue.
     * @param postingStyle - The posting style for the notification.
     */
    enqueue(notification: Notification<any>, postingStyle: PostingStyle): void;
    /**
     * Adds a notification to the notification queue with a specified posting style and criteria for coalescing.
     * @param notification - The notification to add to the queue.
     * @param postingStyle - The posting style for the notification.
     * @param coalescing - A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue.
     */
    enqueue(notification: Notification<any>, postingStyle: PostingStyle, coalescing: NotificationCoalescing): void;
    /**
     * Adds a notification to the notification queue.
     */
    enqueue(notification: Notification<any>, postingStyle: PostingStyle, coalescing?: NotificationCoalescing): void {
        if (typeof coalescing === 'undefined') {
            coalescing = NotificationCoalescingOnNameAndSender;
        }

        switch (postingStyle) {
            case PostingStyle.now:
                if (coalescing !== NotificationCoalescing.none) {
                    this.dequeueNotifications(notification, coalescing);
                }

                this.notificationCenter.post(notification);
                break;

            case PostingStyle.asap:
                if (!this.dequeueAsapNotifications(notification, coalescing)) {
                    this.list.push(notification);
                }

                this.schedule();
                break;
        }
    }

    /**
     * Removes all notifications from the queue that match a provided notification using provided matching criteria.
     * @param matching - The notification used for matching notifications to remove from the notification queue.
     * @param coalescing - A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue.
     */
    dequeueNotifications(matching: Notification, coalescing: NotificationCoalescing): void {
        if (!PREDICATES[coalescing]) {
            return;
        }

        this.list = this.list
            .filter(PREDICATES[coalescing].bind(null, matching));
    }

    /**
     * Removes all notifications, except the first one, from the queue that match a provided notification using provided matching criteria.
     * @param matching - The notification used for matching notifications to remove from the notification queue.
     * @param coalescing - A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue.
     */
    protected dequeueAsapNotifications(matching: Notification, coalescing: NotificationCoalescing): boolean {
        if (!PREDICATES[coalescing]) {
            return false;
        }

        const predicate = PREDICATES[coalescing];
        let found = false;

        this.list = this.list.filter((notification) => {
            if (predicate(matching, notification)) {
                return true;
            }

            if (found) {
                // Omit all matched notifications from second.
                return false;
            }

            // Keep the first matched notification.
            return found = true;
        });

        return found;
    }

    /**
     * Schedule buffered notifications, powered by [asap]{@link https://www.npmjs.com/package/asap}.
     */
    protected schedule(): void {
        if (!this.scheduled) {
            this.scheduled = true;

            asap(() => {
                const buffer = this.list;

                this.list = [];
                this.scheduled = false;

                for (const notification of buffer) {
                    this.notificationCenter.post(notification);
                }
            });
        }
    }
}
