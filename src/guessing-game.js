class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.previosNum = this.min + Math.round( (this.max - this.min) / 2);
        return this.previosNum;
    }

    lower() {
        this.max = this.previosNum;
    }

    greater() {
        this.min = this.previosNum;
    }
}

module.exports = GuessingGame;
