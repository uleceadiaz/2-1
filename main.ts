basic.forever(function () {
    if (input.soundLevel() < 50) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
