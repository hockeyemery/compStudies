input.onButtonPressed(Button.A, function () {
    balls += 1
    basic.showString("Ball")
    basic.showNumber(balls)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Ball")
    basic.showNumber(balls)
    basic.pause(100)
    basic.clearScreen()
    basic.showString("Strike")
    basic.showNumber(strikes)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    strikes += 1
    basic.showString("Strike")
    basic.showNumber(strikes)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    balls = 0
    strikes = 0
})
let strikes = 0
let balls = 0
balls = 0
strikes = 0
basic.forever(function () {
    if (balls == 4) {
        basic.showString("Walk!")
    }
    if (strikes == 3) {
        basic.showString("Out!")
    }
})
