[notification-queue](../README.md) / NotificationCoalescing

# Enumeration: NotificationCoalescing

The enum that specify how notifications are coalesced.

## Table of contents

### Enumeration members

- [none](notificationcoalescing.md#none)
- [onName](notificationcoalescing.md#onname)
- [onSender](notificationcoalescing.md#onsender)

## Enumeration members

### none

• **none** = `0`

Do not coalesce notifications in the queue.

#### Defined in

[NotificationQueue.ts:10](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationQueue.ts#L10)

___

### onName

• **onName** = `1`

Coalesce notifications with the same name.

#### Defined in

[NotificationQueue.ts:12](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationQueue.ts#L12)

___

### onSender

• **onSender** = `2`

Coalesce notifications with the same object.

#### Defined in

[NotificationQueue.ts:14](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationQueue.ts#L14)
