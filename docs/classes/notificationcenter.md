[notification-queue](../README.md) / NotificationCenter

# Class: NotificationCenter

A notification dispatch mechanism that enables the broadcast of information to registered observers.

## Table of contents

### Constructors

- [constructor](notificationcenter.md#constructor)

### Properties

- [list](notificationcenter.md#list)
- [defaultCenter](notificationcenter.md#defaultcenter)

### Accessors

- [default](notificationcenter.md#default)

### Methods

- [addObserver](notificationcenter.md#addobserver)
- [post](notificationcenter.md#post)
- [removeObserver](notificationcenter.md#removeobserver)

## Constructors

### constructor

• **new NotificationCenter**()

## Properties

### list

• `Protected` **list**: [`NotificationObserver`](../interfaces/notificationobserver.md)[] = `[]`

#### Defined in

[NotificationCenter.ts:23](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L23)

___

### defaultCenter

▪ `Static` `Private` **defaultCenter**: [`NotificationCenter`](notificationcenter.md)

#### Defined in

[NotificationCenter.ts:22](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L22)

## Accessors

### default

• `Static` `get` **default**(): [`NotificationCenter`](notificationcenter.md)

Returns the default notification center.

#### Returns

[`NotificationCenter`](notificationcenter.md)

#### Defined in

[NotificationCenter.ts:28](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L28)

## Methods

### addObserver

▸ **addObserver**<`T`\>(`forName`, `object`, `listener`): `object`

Adds an entry to the notification center and returns an opaque object to act as the observer.

#### Example
```typescript
const token = NotificationCenter.default.addObserver('update', null, (notification) => {
    console.log('Update');
});
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forName` | `string` | The name of the notification for which to register the observer. |
| `object` | ``null`` \| `object` | The object whose notifications the observer wants to receive. |
| `listener` | (`notification`: [`Notification`](notification.md)<`T`\>) => `void` | The callback which will be notified when the notification posted. |

#### Returns

`object`

#### Defined in

[NotificationCenter.ts:47](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L47)

▸ **addObserver**<`T`\>(`observer`, `name`, `object`, `selector`): `void`

Adds an entry to the notification center with an observer and a notification selector.

#### Example
```typescript
class Component {
    protected data: string = '';

    listen() {
        // Cannot infer keys of listener from "this-type", use generic <Component> instead.
        NotificationCenter.default.addObserver<Component>(this, 'update', null, 'onNotify');
    }

    onNotify(notification: Notification<string>) {
        this.setData(notification.data);
    }

    setData(data: string): void {
        this.data = data;
    }
}

const component = new Component();

NotificationCenter.default.addObserver(component, 'update', null, 'onNotify');
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `T` | Object registering as an observer. |
| `name` | `string` | The name of the notification for which to register the observer. |
| `object` | ``null`` \| `object` | The object whose notifications the observer wants to receive. |
| `selector` | [`KeyOfListener`](../README.md#keyoflistener)<`T`\> | The name of method which will be notified when the notification posted. |

#### Returns

`void`

#### Defined in

[NotificationCenter.ts:76](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L76)

▸ **addObserver**<`T`\>(`observer`, `name`, `object`, `listener`): `void`

Adds an entry to the notification center with an observer and a callback.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `object` | Object registering as an observer. |
| `name` | `string` | The name of the notification for which to register the observer. |
| `object` | ``null`` \| `object` | The object whose notifications the observer wants to receive. |
| `listener` | (...`args`: `any`[]) => `void` | The callback which will be notified when the notification posted. |

#### Returns

`void`

#### Defined in

[NotificationCenter.ts:84](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L84)

___

### post

▸ **post**(`notification`): `void`

Posts a given notification to the notification center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | [`Notification`](notification.md)<`any`\> | The notification to be posted. |

#### Returns

`void`

#### Defined in

[NotificationCenter.ts:170](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L170)

▸ **post**(`name`, `object`, `data`): `void`

Creates a notification with a given name, object, and data and posts it to the notification center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the notification. |
| `object` | ``null`` \| `object` | The object posting the notification. |
| `data` | `any` | Optional data about the the notification. |

#### Returns

`void`

#### Defined in

[NotificationCenter.ts:177](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L177)

▸ **post**(`name`, `object?`): `void`

Creates a notification with a given name and object and posts it to the notification center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the notification. |
| `object?` | `object` | The object posting the notification. |

#### Returns

`void`

#### Defined in

[NotificationCenter.ts:183](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L183)

___

### removeObserver

▸ **removeObserver**(`observer`): `void`

Removes all entries specifying a given observer from the notification center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `object` | The notification observer. |

#### Returns

`void`

#### Defined in

[NotificationCenter.ts:116](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L116)

▸ **removeObserver**(`observer`, `name`): `void`

Removes all entries specifying a given observer and notification name from the notification center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `object` | The notification observer. |
| `name` | `string` | The name of the notification. |

#### Returns

`void`

#### Defined in

[NotificationCenter.ts:122](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L122)

▸ **removeObserver**(`observer`, `object`): `void`

Removes all entries specifying a given observer and notification object from the notification center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `object` | The notification observer. |
| `object` | `object` | The object posting the notification. |

#### Returns

`void`

#### Defined in

[NotificationCenter.ts:128](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L128)

▸ **removeObserver**(`observer`, `name`, `object`): `void`

Removes all entries specifying a given observer, notification name and object from the notification center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `object` | The notification observer. |
| `name` | `string` | The name of the notification. |
| `object` | `object` | The object posting the notification. |

#### Returns

`void`

#### Defined in

[NotificationCenter.ts:135](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/NotificationCenter.ts#L135)
