[notification-queue](../README.md) / Notification

# Class: Notification<T\>

A container for information broadcast through a notification center to all registered observers.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `void` | The type of data. |

## Table of contents

### Constructors

- [constructor](notification.md#constructor)

### Properties

- [data](notification.md#data)
- [name](notification.md#name)
- [object](notification.md#object)

## Constructors

### constructor

• **new Notification**<`T`\>(`name`, `object?`)

Initializes a new notification.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of notification. |
| `object?` | `object` | An object that the poster wishes to send to observers. |

#### Defined in

[Notification.ts:8](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/Notification.ts#L8)

• **new Notification**<`T`\>(`name`, `object`, `data`)

Initializes a new notification.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of notification. |
| `object` | ``null`` \| `object` | An object that the poster wishes to send to observers. |
| `data` | `T` | Optional data about the the notification. |

#### Defined in

[Notification.ts:15](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/Notification.ts#L15)

## Properties

### data

• `Readonly` **data**: `T`

#### Defined in

[Notification.ts:8](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/Notification.ts#L8)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[Notification.ts:6](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/Notification.ts#L6)

___

### object

• `Readonly` **object**: ``null`` \| `object`

#### Defined in

[Notification.ts:7](https://github.com/nilennoct/notification-queue/blob/8e5e643/src/Notification.ts#L7)
