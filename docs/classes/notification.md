[notification-queue](../README.md) > [Notification](../classes/notification.md)

# Class: Notification

A container for information broadcast through a notification center to all registered observers.

## Type parameters
#### T 

The type of data.

## Hierarchy

**Notification**

## Index

### Constructors

* [constructor](notification.md#constructor)

### Properties

* [data](notification.md#data)
* [name](notification.md#name)
* [object](notification.md#object)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Notification**(name: *`string`*, object?: *`undefined` \| `object`*): [Notification](notification.md)

⊕ **new Notification**(name: *`string`*, object: *`object` \| `null`*, data: *`T`*): [Notification](notification.md)

*Defined in [Notification.ts:8](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/Notification.ts#L8)*

Initializes a new notification.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of notification. |
| `Optional` object | `undefined` \| `object` |  An object that the poster wishes to send to observers. |

**Returns:** [Notification](notification.md)

*Defined in [Notification.ts:15](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/Notification.ts#L15)*

Initializes a new notification.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of notification. |
| object | `object` \| `null` |  An object that the poster wishes to send to observers. |
| data | `T` |  Optional data about the the notification. |

**Returns:** [Notification](notification.md)

___

## Properties

<a id="data"></a>

###  data

**● data**: *`T`*

*Defined in [Notification.ts:8](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/Notification.ts#L8)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [Notification.ts:6](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/Notification.ts#L6)*

___
<a id="object"></a>

###  object

**● object**: *`object` \| `null`*

*Defined in [Notification.ts:7](https://github.com/nilennoct/notification-queue/blob/ede40cb/src/Notification.ts#L7)*

___

