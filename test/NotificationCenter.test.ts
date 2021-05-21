///<reference lib="es6"/>
import { Notification, NotificationCenter, NotificationObserver } from '../src';

function noop() {
}

let notificationCenter: NotificationCenter;

beforeEach(() => {
    notificationCenter = new NotificationCenter();
});

it('should return same shared instance', () => {
    expect(NotificationCenter.default).toBe(NotificationCenter.default);
});

const observerX: object = Object.create({ [Symbol.toStringTag]: 'ObserverX' });
const observerY: object = Object.create({ [Symbol.toStringTag]: 'ObserverY' });
const senderX: object = Object.create({ [Symbol.toStringTag]: 'SenderX' });
const senderY: object = Object.create({ [Symbol.toStringTag]: 'SenderY' });

describe('Add observer', function () {
    it('should add observer correctly', function () {
        notificationCenter.addObserver(observerX, 'A', null, noop);

        const queue: NotificationObserver[] = Reflect.get(notificationCenter, 'list');

        expect(queue.length).toBe(1);
        expect(queue[0].observer).toBe(observerX);
        expect(queue[0].name).toBe('A');
        expect(queue[0].object).toBe(null);
    });
});

describe('Add observer for name', function () {
    it('should add observer correctly', function () {
        const observer = notificationCenter.addObserver('A', null, noop);
        const queue: NotificationObserver[] = Reflect.get(notificationCenter, 'list');

        expect(queue.length).toBe(1);
        expect(queue[0].observer).toBe(observer);
        expect(queue[0].name).toBe('A');
        expect(queue[0].object).toBe(null);
    });

    it('should return different observer', function () {
        const observerA = notificationCenter.addObserver('A', null, noop);
        const observerB = notificationCenter.addObserver('A', null, noop);

        expect(observerA).not.toBe(observerB);
    });

    it('should register listener to auto-generated observer correctly', function (done) {
        expect.assertions(2);

        const observer = notificationCenter.addObserver('A', null, (notification) => {
            expect(notification.name).toBe('A');

            done();
        });

        notificationCenter.addObserver(observer, 'B', null, (notification) => {
            expect(notification.name).toBe('B');

            done();
        });

        notificationCenter.post('A');
        notificationCenter.post('B');
    });
});

describe('Post notification', function () {
    it('should respond with notification correctly', function (done) {
        let data: any;

        notificationCenter.addObserver(observerX, 'A', null, (notification) => {
            expect(notification.name).toBe('A');
            expect(notification.object).toBe(null);
            expect(notification.data).toBe(data);

            done();
        });

        notificationCenter.post('A', null, data = Symbol('data'));
    });

    it('should respond notification correctly by callback', function (done) {
        notificationCenter.addObserver(observerX, 'A', null, () => {
            done();
        });

        notificationCenter.post('A');
    });

    it('should respond notification correctly by selector', function (done) {
        notificationCenter.addObserver({ callback: () => done() }, 'A', null, 'callback');

        notificationCenter.post('A');
    });

    it('should respond notification twice correctly ', function (done) {
        expect.assertions(2);

        notificationCenter.addObserver(observerX, 'A', null, (notification) => {
            expect(notification.name).toBe('A');

            done();
        });

        notificationCenter.addObserver(observerX, 'A', null, (notification) => {
            expect(notification.name).toBe('A');

            done();
        });

        notificationCenter.post('A');
    });

    it('should respond same notification posted correctly', function (done) {
        const notificationToPost = new Notification('A', null, Symbol('data'));

        notificationCenter.addObserver(observerX, 'A', null, (notification) => {
            expect(notification).toBe(notificationToPost);

            done();
        });

        notificationCenter.post(notificationToPost);
    });
});

describe('Remove observer', () => {
    it('should remove correctly by observer', () => {
        const result = Promise.all([
            addObserver(observerX, 'A', null, false),
            addObserver(observerY, 'A', null, true),
        ]);

        notificationCenter.removeObserver(observerY);

        notificationCenter.post('A');

        return result;
    });

    it('should remove correctly by name', function () {
        const result = Promise.all([
            addObserver(observerX, 'A', null, false),
            addObserver(observerX, 'B', null, true),
        ]);

        notificationCenter.removeObserver(observerX, 'B');

        notificationCenter.post('A');
        notificationCenter.post('B');

        return result;
    });

    it('should remove correctly by sender', function () {
        const result = Promise.all([
            addObserver(observerX, 'A', senderX, false),
            addObserver(observerX, 'A', senderY, true),
        ]);

        notificationCenter.removeObserver(observerX, senderY);

        notificationCenter.post('A', senderX);
        notificationCenter.post('A', senderY);

        return result;
    });

    it('should remove correctly by name and sender', function () {
        const result = Promise.all([
            addObserver(observerX, 'A', senderX, false),
            addObserver(observerX, 'A', senderY, true),
            addObserver(observerX, 'B', senderX, false),
            addObserver(observerX, 'B', senderY, false),
        ]);

        notificationCenter.removeObserver(observerX, 'A', senderY);

        notificationCenter.post('A', senderX);
        notificationCenter.post('A', senderY);
        notificationCenter.post('B', senderX);
        notificationCenter.post('B', senderY);

        return result;
    });
});

function addObserver(observer: any, name: string, sender: any, shouldRemove: boolean) {
    return new Promise<void>((resolve, reject) => {
        let timer: any = setTimeout(() => {
            if (shouldRemove) {
                resolve();
            } else {
                reject(new Error('Removed incorrect listener'));
            }

            timer = null;
        }, 50);

        notificationCenter.addObserver(observer, name, sender, () => {
            if (shouldRemove) {
                reject(new Error('Kept incorrect listener'));
            } else {
                resolve();
            }

            clearTimeout(timer);
        });
    });
}
