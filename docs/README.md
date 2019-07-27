> **[notification-queue](README.md)**

## Index

### Enumerations

* [NotificationCoalescing](enums/notificationcoalescing.md)
* [PostingStyle](enums/postingstyle.md)

### Classes

* [Notification](classes/notification.md)
* [NotificationCenter](classes/notificationcenter.md)
* [NotificationQueue](classes/notificationqueue.md)

### Interfaces

* [NotificationObserver](interfaces/notificationobserver.md)

### Type aliases

* [KeyOfListener](README.md#keyoflistener)
* [NotificationListener](README.md#notificationlistener)

## Type aliases

###  KeyOfListener

Ƭ **KeyOfListener**: *`{ [K in keyof T]: T[K] extends (...args: infer P) => void ? P extends [Notification<void>] | [] ? K : never : never; }[keyof T]`*

*Defined in [NotificationCenter.ts:3](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L3)*

___

###  NotificationListener

Ƭ **NotificationListener**: *function*

*Defined in [NotificationCenter.ts:9](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L9)*

#### Type declaration:

▸ (`notification`: [Notification](classes/notification.md)‹*any*›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`notification` | [Notification](classes/notification.md)‹*any*› |