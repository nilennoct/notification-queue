> **[notification-queue](../README.md)**

[NotificationCenter](notificationcenter.md) /

# Class: NotificationCenter

A notification dispatch mechanism that enables the broadcast of information to registered observers.

## Hierarchy

* **NotificationCenter**

## Index

### Properties

* [list](notificationcenter.md#protected-list)
* [defaultCenter](notificationcenter.md#static-private-defaultcenter)

### Accessors

* [default](notificationcenter.md#static-default)

### Methods

* [addObserver](notificationcenter.md#addobserver)
* [post](notificationcenter.md#post)
* [removeObserver](notificationcenter.md#removeobserver)

## Properties

### `Protected` list

• **list**: *[NotificationObserver](../interfaces/notificationobserver.md)[]* =  []

*Defined in [NotificationCenter.ts:23](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L23)*

___

### `Static` `Private` defaultCenter

▪ **defaultCenter**: *[NotificationCenter](notificationcenter.md)*

*Defined in [NotificationCenter.ts:22](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L22)*

## Accessors

### `Static` default

• **get default**(): *[NotificationCenter](notificationcenter.md)*

*Defined in [NotificationCenter.ts:28](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L28)*

Returns the default notification center.

**Returns:** *[NotificationCenter](notificationcenter.md)*

## Methods

###  addObserver

▸ **addObserver**<**T**>(`forName`: string, `object`: object | null, `listener`: function): *object*

*Defined in [NotificationCenter.ts:47](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L47)*

Adds an entry to the notification center and returns an opaque object to act as the observer.

#### Example
```typescript
const token = NotificationCenter.default.addObserver('update', null, (notification) => {
    console.log('Update');
});```

**Type parameters:**

▪ **T**

**Parameters:**

▪ **forName**: *string*

The name of the notification for which to register the observer.

▪ **object**: *object | null*

The object whose notifications the observer wants to receive.

▪ **listener**: *function*

The callback which will be notified when the notification posted.

▸ (`notification`: [Notification](notification.md)‹*`T`*›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`notification` | [Notification](notification.md)‹*`T`*› |

**Returns:** *object*

▸ **addObserver**<**T**>(`observer`: `T`, `name`: string, `object`: object | null, `selector`: [KeyOfListener](../README.md#keyoflistener)‹*`T`*›): *void*

*Defined in [NotificationCenter.ts:76](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L76)*

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

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | `T` | Object registering as an observer. |
`name` | string | The name of the notification for which to register the observer. |
`object` | object \| null | The object whose notifications the observer wants to receive. |
`selector` | [KeyOfListener](../README.md#keyoflistener)‹*`T`*› | The name of method which will be notified when the notification posted. |

**Returns:** *void*

▸ **addObserver**<**T**>(`observer`: object, `name`: string, `object`: object | null, `listener`: function): *void*

*Defined in [NotificationCenter.ts:84](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L84)*

Adds an entry to the notification center with an observer and a callback.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **observer**: *object*

Object registering as an observer.

▪ **name**: *string*

The name of the notification for which to register the observer.

▪ **object**: *object | null*

The object whose notifications the observer wants to receive.

▪ **listener**: *function*

The callback which will be notified when the notification posted.

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  post

▸ **post**(`notification`: [Notification](notification.md)‹*any*›): *void*

*Defined in [NotificationCenter.ts:170](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L170)*

Posts a given notification to the notification center.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`notification` | [Notification](notification.md)‹*any*› | The notification to be posted.  |

**Returns:** *void*

▸ **post**(`name`: string, `object`: object | null, `data`: any): *void*

*Defined in [NotificationCenter.ts:177](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L177)*

Creates a notification with a given name, object, and data and posts it to the notification center.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the notification. |
`object` | object \| null | The object posting the notification. |
`data` | any | Optional data about the the notification.  |

**Returns:** *void*

▸ **post**(`name`: string, `object?`: undefined | object): *void*

*Defined in [NotificationCenter.ts:183](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L183)*

Creates a notification with a given name and object and posts it to the notification center.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the notification. |
`object?` | undefined \| object | The object posting the notification.  |

**Returns:** *void*

___

###  removeObserver

▸ **removeObserver**(`observer`: object): *void*

*Defined in [NotificationCenter.ts:116](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L116)*

Removes all entries specifying a given observer from the notification center.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | object | The notification observer.  |

**Returns:** *void*

▸ **removeObserver**(`observer`: object, `name`: string): *void*

*Defined in [NotificationCenter.ts:122](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L122)*

Removes all entries specifying a given observer and notification name from the notification center.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | object | The notification observer. |
`name` | string | The name of the notification.  |

**Returns:** *void*

▸ **removeObserver**(`observer`: object, `object`: object): *void*

*Defined in [NotificationCenter.ts:128](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L128)*

Removes all entries specifying a given observer and notification object from the notification center.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | object | The notification observer. |
`object` | object | The object posting the notification.  |

**Returns:** *void*

▸ **removeObserver**(`observer`: object, `name`: string, `object`: object): *void*

*Defined in [NotificationCenter.ts:135](https://github.com/nilennoct/notification-queue/blob/5bc0109/src/NotificationCenter.ts#L135)*

Removes all entries specifying a given observer, notification name and object from the notification center.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | object | The notification observer. |
`name` | string | The name of the notification. |
`object` | object | The object posting the notification.  |

**Returns:** *void*