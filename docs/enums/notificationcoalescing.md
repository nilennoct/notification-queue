> **[notification-queue](../README.md)**

[NotificationCoalescing](notificationcoalescing.md) /

# Enumeration: NotificationCoalescing

The enum that specify how notifications are coalesced.

## Index

### Enumeration members

* [none](notificationcoalescing.md#none)
* [onName](notificationcoalescing.md#onname)
* [onSender](notificationcoalescing.md#onsender)

## Enumeration members

###  none

• **none**: = 0

*Defined in [NotificationQueue.ts:10](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L10)*

Do not coalesce notifications in the queue.

___

###  onName

• **onName**: =  1 << 0

*Defined in [NotificationQueue.ts:12](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L12)*

Coalesce notifications with the same name.

___

###  onSender

• **onSender**: =  1 << 1

*Defined in [NotificationQueue.ts:14](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L14)*

Coalesce notifications with the same object.