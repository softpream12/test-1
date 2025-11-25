input.onButtonPressed(Button.A, function () {
    score = 0
})
let score = 0
let num = 0
let i = num
basic.forever(function () {
    while (input.isGesture(Gesture.Shake)) {
        num = randint(0, 100)
        basic.showNumber(num)
        score = num + i
        basic.showNumber(score)
    }
})
