class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.newMin = min;
        this.newMax = max;
    }

    guess() {
        this.requiredNumber = Math.ceil((this.newMin + this.newMax) / 2);
        return this.requiredNumber;
    }

    lower() {
        this.newMax = this.requiredNumber;
    }

    greater() {
        this.newMin = this.requiredNumber;
    }
}

module.exports = GuessingGame;
