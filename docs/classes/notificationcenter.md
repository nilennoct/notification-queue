[notification-queue](../README.md) > [NotificationCenter](../classes/notificationcenter.md)

# Class: NotificationCenter

A notification dispatch mechanism that enables the broadcast of information to registered observers.

## Hierarchy

**NotificationCenter**

## Index

### Properties

* [list](notificationcenter.md#list)
* [listener](notificationcenter.md#listener)
* [listeners](notificationcenter.md#listeners)
* [defaultCenter](notificationcenter.md#defaultcenter)

### Accessors

* [default](notificationcenter.md#default)

### Methods

* [addObserver](notificationcenter.md#addobserver)
* [post](notificationcenter.md#post)
* [removeObserver](notificationcenter.md#removeobserver)

---

## Properties

<a id="list"></a>

### `<Protected>` list

**● list**: *[NotificationObserver](../interfaces/notificationobserver.md)[]* =  []

*Defined in [NotificationCenter.ts:23](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L23)*

___
<a id="listener"></a>

### `<Optional>` listener

**● listener**: *`undefined` \| `function`*

*Defined in [NotificationCenter.ts:25](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L25)*

___
<a id="listeners"></a>

### `<Optional>` listeners

**● listeners**: *`Array`<`function`>*

*Defined in [NotificationCenter.ts:26](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L26)*

___
<a id="defaultcenter"></a>

### `<Static>``<Private>` defaultCenter

**● defaultCenter**: *[NotificationCenter](notificationcenter.md)*

*Defined in [NotificationCenter.ts:22](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L22)*

___

## Accessors

<a id="default"></a>

### `<Static>` default

**get default**(): [NotificationCenter](notificationcenter.md)

*Defined in [NotificationCenter.ts:31](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L31)*

Returns the default notification center.

**Returns:** [NotificationCenter](notificationcenter.md)

___

## Methods

<a id="addobserver"></a>

###  addObserver

▸ **addObserver**<`T`>(forName: *`string`*, object: *`object` \| `null`*, listener: *`function`*): `object`

▸ **addObserver**<`T`>(observer: *`T`*, name: *`string`*, object: *`object` \| `null`*, selector: *[KeyOfListener](../#keyoflistener)<`T`>*): `void`

▸ **addObserver**<`T`>(observer: *`object`*, name: *`string`*, object: *`object` \| `null`*, listener: *`function`*): `void`

*Defined in [NotificationCenter.ts:50](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L50)*

Adds an entry to the notification center and returns an opaque object to act as the observer.

#### Example

```typescript
const token = NotificationCenter.default.addObserver('update', null, (notification) => {
    console.log('Update');
});
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| forName | `string` |  The name of the notification for which to register the observer. |
| object | `object` \| `null` |  The object whose notifications the observer wants to receive. |
| listener | `function` |  The callback which will be notified when the notification posted. |

**Returns:** `object`

*Defined in [NotificationCenter.ts:79](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L79)*

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

**Type parameters:**

#### T :  `object`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| observer | `T` |  Object registering as an observer. |
| name | `string` |  The name of the notification for which to register the observer. |
| object | `object` \| `null` |  The object whose notifications the observer wants to receive. |
| selector | [KeyOfListener](../#keyoflistener)<`T`> |  The name of method which will be notified when the notification posted. |

**Returns:** `void`

*Defined in [NotificationCenter.ts:87](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L87)*

Adds an entry to the notification center with an observer and a callback.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| observer | `object` |  Object registering as an observer. |
| name | `string` |  The name of the notification for which to register the observer. |
| object | `object` \| `null` |  The object whose notifications the observer wants to receive. |
| listener | `function` |  The callback which will be notified when the notification posted. |

**Returns:** `void`

___
<a id="post"></a>

###  post

▸ **post**(notification: *[Notification](notification.md)<`any`>*): `void`

▸ **post**(name: *`string`*, object: *`object` \| `null`*, data: *`any`*): `void`

▸ **post**(name: *`string`*, object?: *`undefined` \| `object`*): `void`

*Defined in [NotificationCenter.ts:173](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L173)*

Posts a given notification to the notification center.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| notification | [Notification](notification.md)<`any`> |  The notification to be posted. |

**Returns:** `void`

*Defined in [NotificationCenter.ts:180](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L180)*

Creates a notification with a given name, object, and data and posts it to the notification center.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the notification. |
| object | `object` \| `null` |  The object posting the notification. |
| data | `any` |  Optional data about the the notification. |

**Returns:** `void`

*Defined in [NotificationCenter.ts:186](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L186)*

Creates a notification with a given name and object and posts it to the notification center.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the notification. |
| `Optional` object | `undefined` \| `object` |  The object posting the notification. |

**Returns:** `void`

___
<a id="removeobserver"></a>

###  removeObserver

▸ **removeObserver**(observer: *`object`*): `void`

▸ **removeObserver**(observer: *`object`*, name: *`string`*): `void`

▸ **removeObserver**(observer: *`object`*, object: *`object`*): `void`

▸ **removeObserver**(observer: *`object`*, name: *`string`*, object: *`object`*): `void`

*Defined in [NotificationCenter.ts:119](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L119)*

Removes all entries specifying a given observer from the notification center.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| observer | `object` |  The notification observer. |

**Returns:** `void`

*Defined in [NotificationCenter.ts:125](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L125)*

Removes all entries specifying a given observer and notification name from the notification center.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| observer | `object` |  The notification observer. |
| name | `string` |  The name of the notification. |

**Returns:** `void`

*Defined in [NotificationCenter.ts:131](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L131)*

Removes all entries specifying a given observer and notification object from the notification center.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| observer | `object` |  The notification observer. |
| object | `object` |  The object posting the notification. |

**Returns:** `void`

*Defined in [NotificationCenter.ts:138](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/NotificationCenter.ts#L138)*

Removes all entries specifying a given observer, notification name and object from the notification center.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| observer | `object` |  The notification observer. |
| name | `string` |  The name of the notification. |
| object | `object` |  The object posting the notification. |

**Returns:** `void`

___

