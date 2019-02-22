///<reference lib="es6"/>
///<reference types="node"/>
import { Notification, NotificationCenter, NotificationCoalescing, NotificationQueue, PostingStyle } from '../src';

const observer = Object.create(null);
const senderX: object = Object.create({ [Symbol.toStringTag]: 'SenderX' });
const senderY: object = Object.create({ [Symbol.toStringTag]: 'SenderY' });

let notificationCenter: NotificationCenter;
let notificationQueue: NotificationQueue;

beforeEach(() => {
    notificationCenter = new NotificationCenter();
    notificationQueue = new NotificationQueue(notificationCenter);
});

afterEach(() => {
    notificationCenter.removeObserver(observer);
});

it('should return same default queue', function () {
    expect(NotificationQueue.default).toBe(NotificationQueue.default);
});

describe('Enqueue', function () {
    it('should post notification right now correctly', function () {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.now);

        expect(listener).toBeCalled();
    });

    it('should post notification asap correctly', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);
        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.asap);

        expect(listener).not.toBeCalled();

        setImmediate(() => {
            expect(listener).toBeCalled();

            done();
        });
    });
});

describe('Dequeue', function () {
    it('should not dequeue notification posted right now', function () {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.now);
        notificationQueue.dequeueNotifications(new Notification('A'), NotificationCoalescing.onName);

        expect(listener).toBeCalled();
    });

    it('should dequeue notifications posted asap', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.asap);
        notificationQueue.dequeueNotifications(new Notification('A'), NotificationCoalescing.onName);

        setImmediate(() => {
            expect(listener).not.toBeCalled();

            done();
        });
    });

    it('should dequeue notifications posted asap with same sender', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);
        notificationCenter.addObserver(observer, 'B', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.asap);
        notificationQueue.dequeueNotifications(new Notification('B'), NotificationCoalescing.onSender);

        setImmediate(() => {
            expect(listener).not.toBeCalled();

            done();
        });
    });

    it('should not dequeue notifications posted asap without coalescing', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.asap);
        notificationQueue.dequeueNotifications(new Notification('A'), NotificationCoalescing.none);

        setImmediate(() => {
            expect(listener).toBeCalled();

            done();
        });
    });
});

describe('Coalescing', function () {
    it('should not coalesce notification when posting right now', function () {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.now);
        notificationQueue.enqueue(new Notification('A', null, 'Y'), PostingStyle.now);

        expect(listener).toBeCalledTimes(2);
        expect(listener.mock.calls[0][0].data).toBe('X');
        expect(listener.mock.calls[1][0].data).toBe('Y');
    });

    it('should post correctly without coalescing', function (done) {
        const listener = createMockListener(done);

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.asap, NotificationCoalescing.none);
        notificationQueue.enqueue(new Notification('A', null, 'Y'), PostingStyle.asap, NotificationCoalescing.none);

        expect(listener).toBeCalledTimes(0);

        setImmediate(() => {
            expect(listener).toBeCalledTimes(2);
            expect(listener.mock.calls[0][0].data).toBe('X');
            expect(listener.mock.calls[1][0].data).toBe('Y');

            done();
        });
    });

    it('should post correctly coalescing with name', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);
        notificationCenter.addObserver(observer, 'B', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.asap, NotificationCoalescing.onName);
        notificationQueue.enqueue(new Notification('B', null, 'Y'), PostingStyle.asap, NotificationCoalescing.onName);
        notificationQueue.enqueue(new Notification('A', null, 'Z'), PostingStyle.asap, NotificationCoalescing.onName);

        expect(listener).toBeCalledTimes(0);

        setImmediate(() => {
            expect(listener).toBeCalledTimes(2);
            expect(listener.mock.calls[0][0].data).toBe('X');
            expect(listener.mock.calls[1][0].data).toBe('Y');

            done();
        });
    });

    it('should post correctly coalescing with sender', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);
        notificationCenter.addObserver(observer, 'B', null, listener);

        notificationQueue.enqueue(new Notification('A', senderX, 'X'), PostingStyle.asap, NotificationCoalescing.onSender);
        notificationQueue.enqueue(new Notification('A', senderY, 'Y'), PostingStyle.asap, NotificationCoalescing.onSender);
        notificationQueue.enqueue(new Notification('B', senderX, 'Z'), PostingStyle.asap, NotificationCoalescing.onSender);

        expect(listener).toBeCalledTimes(0);

        setImmediate(() => {
            expect(listener).toBeCalledTimes(2);
            expect(listener.mock.calls[0][0].data).toBe('X');
            expect(listener.mock.calls[1][0].data).toBe('Y');

            done();
        });
    });

    it('should post correctly coalescing with name and sender', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);
        notificationCenter.addObserver(observer, 'B', null, listener);

        notificationQueue.enqueue(new Notification('A', senderX, 'X'), PostingStyle.asap);
        notificationQueue.enqueue(new Notification('B', senderX, 'Y'), PostingStyle.asap);
        notificationQueue.enqueue(new Notification('A', senderY, 'Z'), PostingStyle.asap);
        notificationQueue.enqueue(new Notification('A', senderX, 'x'), PostingStyle.asap);

        expect(listener).toBeCalledTimes(0);

        setImmediate(() => {
            expect(listener).toBeCalledTimes(3);
            expect(listener.mock.calls[0][0].data).toBe('X');
            expect(listener.mock.calls[1][0].data).toBe('Y');
            expect(listener.mock.calls[2][0].data).toBe('Z');

            done();
        });
    });

    it('should post correctly coalescing with name or sender', function (done) {
        const listener = createMockListener();
        const senderX = { name: 'SenderX' };
        const senderY = { name: 'SenderY' };
        notificationCenter.addObserver(observer, 'A', senderX, listener);
        notificationCenter.addObserver(observer, 'A', senderY, listener);

        const notification1 = new Notification('A', senderX);
        const notification2 = new Notification('A', senderY);

        notificationQueue.enqueue(notification1, PostingStyle.asap, NotificationCoalescing.onName);
        notificationQueue.enqueue(notification2, PostingStyle.asap, NotificationCoalescing.onSender);
        notificationQueue.enqueue(notification1, PostingStyle.asap, NotificationCoalescing.onName);
        notificationQueue.enqueue(notification2, PostingStyle.asap, NotificationCoalescing.onName);
        notificationQueue.enqueue(notification1, PostingStyle.asap, NotificationCoalescing.onSender);

        expect(listener).toBeCalledTimes(0);

        setImmediate(() => {
            expect(listener).toBeCalledTimes(1);
            expect(listener.mock.calls[0][0].object).toBe(senderX);

            done();
        });
    });
});

describe('Mix now and asap', function () {
    it('should post correctly with now then asap', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.now);
        notificationQueue.enqueue(new Notification('A', null, 'Y'), PostingStyle.asap);

        expect(listener).toBeCalledTimes(1);
        expect(listener.mock.calls[0][0].data).toBe('X');

        setImmediate(() => {
            expect(listener).toBeCalledTimes(2);
            expect(listener.mock.calls[1][0].data).toBe('Y');

            done();
        });
    });

    it('should post correctly with asap then now', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.asap);
        notificationQueue.enqueue(new Notification('A', null, 'Y'), PostingStyle.now);

        expect(listener).toBeCalledTimes(1);
        expect(listener.mock.calls[0][0].data).toBe('Y');

        setImmediate(() => {
            expect(listener).toBeCalledTimes(1);

            done();
        });
    });
});

describe('Coalescing', function () {
    it('should post correctly: case 1', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.asap);
        notificationQueue.enqueue(new Notification('A', null, 'Y'), PostingStyle.now, NotificationCoalescing.none);

        expect(listener).toBeCalledTimes(1);
        expect(listener.mock.calls[0][0].data).toBe('Y');

        setImmediate(() => {
            expect(listener).toBeCalledTimes(2);
            expect(listener.mock.calls[1][0].data).toBe('X');

            done();
        });
    });

    it('should post correctly: case 2', function (done) {
        const listener = createMockListener();

        notificationCenter.addObserver(observer, 'A', null, listener);

        notificationQueue.enqueue(new Notification('A', null, 'X'), PostingStyle.asap);
        notificationQueue.enqueue(new Notification('A', {}, 'Y'), PostingStyle.asap);
        notificationQueue.enqueue(new Notification('A', null, 'x'), PostingStyle.now);
        notificationQueue.enqueue(new Notification('A', null, 'Z'), PostingStyle.asap);

        expect(listener).toBeCalledTimes(1);
        expect(listener.mock.calls[0][0].data).toBe('x');

        setImmediate(() => {
            expect(listener).toBeCalledTimes(3);
            expect(listener.mock.calls[1][0].data).toBe('Y');
            expect(listener.mock.calls[2][0].data).toBe('Z');

            done();
        });
    });
});

function createMockListener(done?: jest.DoneCallback) {
    return jest.fn((notification: Notification<string>) => {
        if (done) {
            done();
        }
    });
}
