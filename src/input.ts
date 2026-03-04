export default class InputListener {
    keys!: string[];
    validKeys: string[] = ['a', 's', 'd', 'j', 'k', 'l', ' '];

    constructor() {
        this.keys = [];
    }

    addEvent(e: KeyboardEvent) {
        if (this.validKeys.includes(e.key) && this.keys.indexOf(e.key) === -1) {
            this.keys.push(e.key);
        }
    }

    getEventList(): string[] {
        return this.keys;
    }
}