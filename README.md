A JavaScript implement of NotificationQueue and NotificationCenter.

## Installation

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

See [documents](docs/README.md)
