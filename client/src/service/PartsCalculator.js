class PartsCalculator {

    calculateParts(width, height) {
        const louverCount = Math.ceil(height / 30);
        const widthMultiplier = Math.ceil(width / 40);

        return {
            "louvers": (widthMultiplier * louverCount),
            "shutterStaples": (widthMultiplier * (louverCount - 1)),
            "rails": widthMultiplier,
            "tiltRod": widthMultiplier,
            "hinges": (widthMultiplier * (2 * (louverCount - 1))),
        };
    }
}

export default new PartsCalculator();
