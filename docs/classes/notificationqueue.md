[notification-queue](../README.md) > [NotificationQueue](../classes/notificationqueue.md)

# Class: NotificationQueue

A notification center buffer.

## Hierarchy

**NotificationQueue**

## Index

### Constructors

* [constructor](notificationqueue.md#constructor)

### Properties

* [list](notificationqueue.md#list)
* [notificationCenter](notificationqueue.md#notificationcenter)
* [scheduled](notificationqueue.md#scheduled)
* [defaultQueue](notificationqueue.md#defaultqueue)

### Accessors

* [default](notificationqueue.md#default)

### Methods

* [dequeueAsapNotifications](notificationqueue.md#dequeueasapnotifications)
* [dequeueNotifications](notificationqueue.md#dequeuenotifications)
* [enqueue](notificationqueue.md#enqueue)
* [schedule](notificationqueue.md#schedule)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new NotificationQueue**(notificationCenter: *[NotificationCenter](notificationcenter.md)*): [NotificationQueue](notificationqueue.md)

*Defined in [NotificationQueue.ts:47](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| notificationCenter | [NotificationCenter](notificationcenter.md) |

**Returns:** [NotificationQueue](notificationqueue.md)

___

## Properties

<a id="list"></a>

### `<Protected>` list

**● list**: *[Notification](notification.md)[]* =  []

*Defined in [NotificationQueue.ts:46](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L46)*

___
<a id="notificationcenter"></a>

### `<Protected>` notificationCenter

**● notificationCenter**: *[NotificationCenter](notificationcenter.md)*

*Defined in [NotificationQueue.ts:49](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L49)*

___
<a id="scheduled"></a>

### `<Protected>` scheduled

**● scheduled**: *`boolean`* = false

*Defined in [NotificationQueue.ts:47](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L47)*

___
<a id="defaultqueue"></a>

### `<Static>``<Private>` defaultQueue

**● defaultQueue**: *[NotificationQueue](notificationqueue.md)*

*Defined in [NotificationQueue.ts:45](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L45)*

___

## Accessors

<a id="default"></a>

### `<Static>` default

**get default**(): [NotificationQueue](notificationqueue.md)

*Defined in [NotificationQueue.ts:55](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L55)*

Returns the default notification queue.

**Returns:** [NotificationQueue](notificationqueue.md)

___

## Methods

<a id="dequeueasapnotifications"></a>

### `<Protected>` dequeueAsapNotifications

▸ **dequeueAsapNotifications**(matching: *[Notification](notification.md)*, coalescing: *[NotificationCoalescing](../enums/notificationcoalescing.md)*): `boolean`

*Defined in [NotificationQueue.ts:122](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L122)*

Removes all notifications, except the first one, from the queue that match a provided notification using provided matching criteria.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matching | [Notification](notification.md) |  The notification used for matching notifications to remove from the notification queue. |
| coalescing | [NotificationCoalescing](../enums/notificationcoalescing.md) |  A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue. |

**Returns:** `boolean`

___
<a id="dequeuenotifications"></a>

###  dequeueNotifications

▸ **dequeueNotifications**(matching: *[Notification](notification.md)*, coalescing: *[NotificationCoalescing](../enums/notificationcoalescing.md)*): `void`

*Defined in [NotificationQueue.ts:108](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L108)*

Removes all notifications from the queue that match a provided notification using provided matching criteria.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matching | [Notification](notification.md) |  The notification used for matching notifications to remove from the notification queue. |
| coalescing | [NotificationCoalescing](../enums/notificationcoalescing.md) |  A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue. |

**Returns:** `void`

___
<a id="enqueue"></a>

###  enqueue

▸ **enqueue**(notification: *[Notification](notification.md)<`any`>*, postingStyle: *[PostingStyle](../enums/postingstyle.md)*): `void`

▸ **enqueue**(notification: *[Notification](notification.md)<`any`>*, postingStyle: *[PostingStyle](../enums/postingstyle.md)*, coalescing: *[NotificationCoalescing](../enums/notificationcoalescing.md)*): `void`

*Defined in [NotificationQueue.ts:68](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L68)*

Adds a notification to the notification queue with a specified posting style, and coalesce only notifications that match both the notification’s name and object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| notification | [Notification](notification.md)<`any`> |  The notification to add to the queue. |
| postingStyle | [PostingStyle](../enums/postingstyle.md) |  The posting style for the notification. |

**Returns:** `void`

*Defined in [NotificationQueue.ts:75](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L75)*

Adds a notification to the notification queue with a specified posting style and criteria for coalescing.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| notification | [Notification](notification.md)<`any`> |  The notification to add to the queue. |
| postingStyle | [PostingStyle](../enums/postingstyle.md) |  The posting style for the notification. |
| coalescing | [NotificationCoalescing](../enums/notificationcoalescing.md) |  A value indicating what criteria to use when matching attributes of notification to attributes of notifications in the queue. |

**Returns:** `void`

___
<a id="schedule"></a>

### `<Protected>` schedule

▸ **schedule**(): `void`

*Defined in [NotificationQueue.ts:150](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationQueue.ts#L150)*

Schedule buffered notifications, powered by [asap](https://www.npmjs.com/package/asap).

**Returns:** `void`

___

