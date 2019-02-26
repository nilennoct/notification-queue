A JavaScript implement of NotificationQueue and NotificationCenter.

## Installation
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fnilennoct%2Fnotification-queue.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fnilennoct%2Fnotification-queue?ref=badge_shield)


```shell
npm install notification-queue
```

## Usage

### NotificationCenter

```typescript
import { NotificationCenter } from 'notification-queue';

const center = NotificationCenter.default;
const token = center.addObserver('update', null, (notification) => {
    console.log('Update:', notification.data);
});

center.post('update', null, 'Hello world!');

// Output "Update: Hello world!".

center.removeObserver(token);
```

### NotificationQueue

```typescript
import { Notification, NotificationCenter, NotificationQueue, PostingStyle } from 'notification-queue';

const center = NotificationCenter.default;
const queue = NotificationQueue.default;

const token = center.addObserver('update', null, (notification) => {
    console.log(notification.data);
});

queue.enqueue(Notification.init('update', null, 'X'), PostingStyle.asap);
queue.enqueue(Notification.init('update', null, 'Y'), PostingStyle.asap);

// Output "X".
```

### API

See [documents](https://github.com/nilennoct/notification-queue/blob/master/docs/README.md)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fnilennoct%2Fnotification-queue.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fnilennoct%2Fnotification-queue?ref=badge_large)