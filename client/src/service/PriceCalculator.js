class PriceCalculator {

    calculatePrice(parts) {
        return parts.louvers * 22 +
            parts.shutterStaples * 11 +
            parts.hinges * 2 +
            parts.tiltRod * 20 +
            parts.rails * 16;
    }

}

export default new PriceCalculator();
