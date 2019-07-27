> **[notification-queue](../README.md)**

[NotificationQueue](notificationqueue.md) /

# Class: NotificationQueue

A notification center buffer.

## Hierarchy

* **NotificationQueue**

## Index

### Constructors

* [constructor](notificationqueue.md#constructor)

### Properties

* [list](notificationqueue.md#protected-list)
* [notificationCenter](notificationqueue.md#protected-notificationcenter)
* [scheduled](notificationqueue.md#protected-scheduled)
* [defaultQueue](notificationqueue.md#static-private-defaultqueue)

### Accessors

* [default](notificationqueue.md#static-default)

### Methods

* [dequeueAsapNotifications](notificationqueue.md#protected-dequeueasapnotifications)
* [dequeueNotifications](notificationqueue.md#dequeuenotifications)
* [enqueue](notificationqueue.md#enqueue)
* [schedule](notificationqueue.md#protected-schedule)

## Constructors

###  constructor

\+ **new NotificationQueue**(`notificationCenter`: [NotificationCenter](notificationcenter.md)): *[NotificationQueue](notificationqueue.md)*

*Defined in [NotificationQueue.ts:47](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`notificationCenter` | [NotificationCenter](notificationcenter.md) |

**Returns:** *[NotificationQueue](notificationqueue.md)*

## Properties

### `Protected` list

• **list**: *[Notification](notification.md)[]* =  []

*Defined in [NotificationQueue.ts:46](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L46)*

___

### `Protected` notificationCenter

• **notificationCenter**: *[NotificationCenter](notificationcenter.md)*

*Defined in [NotificationQueue.ts:49](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L49)*

___

### `Protected` scheduled

• **scheduled**: *boolean* = false

*Defined in [NotificationQueue.ts:47](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L47)*

___

### `Static` `Private` defaultQueue

▪ **defaultQueue**: *[NotificationQueue](notificationqueue.md)*

*Defined in [NotificationQueue.ts:45](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L45)*

## Accessors

### `Static` default

• **get default**(): *[NotificationQueue](notificationqueue.md)*

*Defined in [NotificationQueue.ts:55](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L55)*

Returns the default notification queue.

**Returns:** *[NotificationQueue](notificationqueue.md)*

## Methods

### `Protected` dequeueAsapNotifications

▸ **dequeueAsapNotifications**(`matching`: [Notification](notification.md), `coalescing`: [NotificationCoalescing](../enums/notificationcoalescing.md)): *boolean*

*Defined in [NotificationQueue.ts:122](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L122)*

Removes all notifications, except the first one, from the queue that match a provided notification using provided matching criteria.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matching` | [Notification](notification.md) | The notification used for matching notifications to remove from the notification queue. |
`coalescing` | [NotificationCoalescing](../enums/notificationcoalescing.md) | A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue.  |

**Returns:** *boolean*

___

###  dequeueNotifications

▸ **dequeueNotifications**(`matching`: [Notification](notification.md), `coalescing`: [NotificationCoalescing](../enums/notificationcoalescing.md)): *void*

*Defined in [NotificationQueue.ts:108](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L108)*

Removes all notifications from the queue that match a provided notification using provided matching criteria.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matching` | [Notification](notification.md) | The notification used for matching notifications to remove from the notification queue. |
`coalescing` | [NotificationCoalescing](../enums/notificationcoalescing.md) | A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue.  |

**Returns:** *void*

___

###  enqueue

▸ **enqueue**(`notification`: [Notification](notification.md)‹*any*›, `postingStyle`: [PostingStyle](../enums/postingstyle.md)): *void*

*Defined in [NotificationQueue.ts:68](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L68)*

Adds a notification to the notification queue with a specified posting style, and coalesce only notifications that match both the notification’s name and object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`notification` | [Notification](notification.md)‹*any*› | The notification to add to the queue. |
`postingStyle` | [PostingStyle](../enums/postingstyle.md) | The posting style for the notification.  |

**Returns:** *void*

▸ **enqueue**(`notification`: [Notification](notification.md)‹*any*›, `postingStyle`: [PostingStyle](../enums/postingstyle.md), `coalescing`: [NotificationCoalescing](../enums/notificationcoalescing.md)): *void*

*Defined in [NotificationQueue.ts:75](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L75)*

Adds a notification to the notification queue with a specified posting style and criteria for coalescing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`notification` | [Notification](notification.md)‹*any*› | The notification to add to the queue. |
`postingStyle` | [PostingStyle](../enums/postingstyle.md) | The posting style for the notification. |
`coalescing` | [NotificationCoalescing](../enums/notificationcoalescing.md) | A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue.  |

**Returns:** *void*

___

### `Protected` schedule

▸ **schedule**(): *void*

*Defined in [NotificationQueue.ts:150](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationQueue.ts#L150)*

Schedule buffered notifications, powered by https://www.npmjs.com/package/asap.

**Returns:** *void*