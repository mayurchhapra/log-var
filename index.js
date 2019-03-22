//String
Object.defineProperty(String.prototype, '_', {
    get() {
        console.log(this.valueOf());
    }
});
Object.defineProperty(String.prototype, 'type', {
    get() {
        console.log(typeof this.valueOf());
    }
});
// -----------
//Number
Object.defineProperty(Number.prototype, '_', {
    get() {
        console.log(this.valueOf());
    }
});

Object.defineProperty(Number.prototype, 'type', {
    get() {
        console.log(typeof this.valueOf());
    }
});
// -----------
//Boolean
Object.defineProperty(Boolean.prototype, '_', {
    get () {
        console.log(this.valueOf());
    }
});

Object.defineProperty(Boolean.prototype, 'type', {
    get () {
        console.log(typeof this.valueOf());
    }
});

Object.defineProperty(Array.prototype, '_', {
    get () {
        console.log(this.valueOf());
    }
});

module.exports = {
    '_': this._,
    'type': this.type
};