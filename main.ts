let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = randint(1, 10)
    basic.showNumber(a)
})
input.onButtonPressed(Button.B, function () {
    b = randint(1, 10)
    basic.showNumber(b)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(a * b)
})
