class WindowCalculator {

    calculateWindow(width, height) {

        return {
            "width": width,
            "height": height,
            "panels": Math.max(1, Math.round(width/100)),
            "mountSize": Math.max(1, Math.round(width/100) * 10)
        }
    }
}

export default new WindowCalculator();
