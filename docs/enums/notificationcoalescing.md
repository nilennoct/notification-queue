[notification-queue](../README.md) > [NotificationCoalescing](../enums/notificationcoalescing.md)

# Enumeration: NotificationCoalescing

The enum that specify how notifications are coalesced.

## Index

### Enumeration members

* [none](notificationcoalescing.md#none)
* [onName](notificationcoalescing.md#onname)
* [onSender](notificationcoalescing.md#onsender)

---

## Enumeration members

<a id="none"></a>

###  none

**none**:  = 0

*Defined in [NotificationQueue.ts:10](https://github.com/nilennoct/notification-queue/blob/0247334/src/NotificationQueue.ts#L10)*

Do not coalesce notifications in the queue.

___
<a id="onname"></a>

###  onName

**onName**:  =  1 << 0

*Defined in [NotificationQueue.ts:12](https://github.com/nilennoct/notification-queue/blob/0247334/src/NotificationQueue.ts#L12)*

Coalesce notifications with the same name.

___
<a id="onsender"></a>

###  onSender

**onSender**:  =  1 << 1

*Defined in [NotificationQueue.ts:14](https://github.com/nilennoct/notification-queue/blob/0247334/src/NotificationQueue.ts#L14)*

Coalesce notifications with the same object.

___

