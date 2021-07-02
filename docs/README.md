notification-queue

# notification-queue

## Table of contents

### Enumerations

- [NotificationCoalescing](enums/notificationcoalescing.md)
- [PostingStyle](enums/postingstyle.md)

### Classes

- [Notification](classes/notification.md)
- [NotificationCenter](classes/notificationcenter.md)
- [NotificationQueue](classes/notificationqueue.md)

### Interfaces

- [NotificationObserver](interfaces/notificationobserver.md)

### Type aliases

- [KeyOfListener](README.md#keyoflistener)
- [NotificationListener](README.md#notificationlistener)

## Type aliases

### KeyOfListener

Ƭ **KeyOfListener**<`T`\>: { [K in keyof T]: T[K] extends function ? P extends [Notification] \| [] ? K : never : never}[keyof `T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[NotificationCenter.ts:3](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L3)

___

### NotificationListener

Ƭ **NotificationListener**: (`notification`: [`Notification`](classes/notification.md)<`any`\>) => `void`

#### Type declaration

▸ (`notification`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`Notification`](classes/notification.md)<`any`\> |

##### Returns

`void`

#### Defined in

[NotificationCenter.ts:9](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L9)
