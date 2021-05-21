[notification-queue](../README.md) / NotificationQueue

# Class: NotificationQueue

A notification center buffer.

## Table of contents

### Constructors

- [constructor](notificationqueue.md#constructor)

### Properties

- [list](notificationqueue.md#list)
- [notificationCenter](notificationqueue.md#notificationcenter)
- [scheduled](notificationqueue.md#scheduled)
- [defaultQueue](notificationqueue.md#defaultqueue)

### Accessors

- [default](notificationqueue.md#default)

### Methods

- [dequeueAsapNotifications](notificationqueue.md#dequeueasapnotifications)
- [dequeueNotifications](notificationqueue.md#dequeuenotifications)
- [enqueue](notificationqueue.md#enqueue)
- [schedule](notificationqueue.md#schedule)

## Constructors

### constructor

\+ **new NotificationQueue**(`notificationCenter`: [*NotificationCenter*](notificationcenter.md)): [*NotificationQueue*](notificationqueue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `notificationCenter` | [*NotificationCenter*](notificationcenter.md) |

**Returns:** [*NotificationQueue*](notificationqueue.md)

Defined in: [NotificationQueue.ts:47](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L47)

## Properties

### list

• `Protected` **list**: [*Notification*](notification.md)<void\>[]= []

Defined in: [NotificationQueue.ts:46](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L46)

___

### notificationCenter

• `Protected` `Readonly` **notificationCenter**: [*NotificationCenter*](notificationcenter.md)

___

### scheduled

• `Protected` **scheduled**: *boolean*= false

Defined in: [NotificationQueue.ts:47](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L47)

___

### defaultQueue

▪ `Static` `Private` **defaultQueue**: [*NotificationQueue*](notificationqueue.md)

Defined in: [NotificationQueue.ts:45](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L45)

## Accessors

### default

• `Static` get **default**(): [*NotificationQueue*](notificationqueue.md)

Returns the default notification queue.

**Returns:** [*NotificationQueue*](notificationqueue.md)

Defined in: [NotificationQueue.ts:55](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L55)

## Methods

### dequeueAsapNotifications

▸ `Protected` **dequeueAsapNotifications**(`matching`: [*Notification*](notification.md)<void\>, `coalescing`: [*NotificationCoalescing*](../enums/notificationcoalescing.md)): *boolean*

Removes all notifications, except the first one, from the queue that match a provided notification using provided matching criteria.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matching` | [*Notification*](notification.md)<void\> | The notification used for matching notifications to remove from the notification queue. |
| `coalescing` | [*NotificationCoalescing*](../enums/notificationcoalescing.md) | A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue. |

**Returns:** *boolean*

Defined in: [NotificationQueue.ts:122](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L122)

___

### dequeueNotifications

▸ **dequeueNotifications**(`matching`: [*Notification*](notification.md)<void\>, `coalescing`: [*NotificationCoalescing*](../enums/notificationcoalescing.md)): *void*

Removes all notifications from the queue that match a provided notification using provided matching criteria.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matching` | [*Notification*](notification.md)<void\> | The notification used for matching notifications to remove from the notification queue. |
| `coalescing` | [*NotificationCoalescing*](../enums/notificationcoalescing.md) | A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue. |

**Returns:** *void*

Defined in: [NotificationQueue.ts:108](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L108)

___

### enqueue

▸ **enqueue**(`notification`: [*Notification*](notification.md)<any\>, `postingStyle`: [*PostingStyle*](../enums/postingstyle.md)): *void*

Adds a notification to the notification queue with a specified posting style, and coalesce only notifications that match both the notification’s name and object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | [*Notification*](notification.md)<any\> | The notification to add to the queue. |
| `postingStyle` | [*PostingStyle*](../enums/postingstyle.md) | The posting style for the notification. |

**Returns:** *void*

Defined in: [NotificationQueue.ts:68](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L68)

▸ **enqueue**(`notification`: [*Notification*](notification.md)<any\>, `postingStyle`: [*PostingStyle*](../enums/postingstyle.md), `coalescing`: [*NotificationCoalescing*](../enums/notificationcoalescing.md)): *void*

Adds a notification to the notification queue with a specified posting style and criteria for coalescing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | [*Notification*](notification.md)<any\> | The notification to add to the queue. |
| `postingStyle` | [*PostingStyle*](../enums/postingstyle.md) | The posting style for the notification. |
| `coalescing` | [*NotificationCoalescing*](../enums/notificationcoalescing.md) | A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue. |

**Returns:** *void*

Defined in: [NotificationQueue.ts:75](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L75)

___

### schedule

▸ `Protected` **schedule**(): *void*

Schedule buffered notifications, powered by [asap](https://www.npmjs.com/package/asap).

**Returns:** *void*

Defined in: [NotificationQueue.ts:150](https://github.com/nilennoct/notification-queue/blob/dd80ab8/src/NotificationQueue.ts#L150)
