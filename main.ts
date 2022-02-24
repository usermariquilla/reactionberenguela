let Player1_score = 0
let Player2_score = 0
let Gameover = 0
basic.forever(function () {
    if (led.point(2, 2) && input.pinIsPressed(TouchPin.P1)) {
        Player1_score += 1
        led.toggle(2, 2)
    }
})
basic.forever(function () {
    if (Player2_score == 5) {
        Gameover = 1
        led.toggle(2, 2)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (Gameover == 0) {
        led.plot(0, Player1_score - 1)
        led.plot(4, Player2_score - 1)
    }
})
basic.forever(function () {
    if (led.point(2, 2) && input.pinIsPressed(TouchPin.P2)) {
        Player2_score += 1
        led.toggle(2, 2)
    }
})
basic.forever(function () {
    if (Player1_score == 5) {
        Gameover = 1
        led.toggle(2, 2)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    basic.pause(randint(2000, 12000))
    led.toggle(2, 2)
})
