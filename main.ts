input.onButtonPressed(Button.A, function () {
    if (randint(1, 319) == 1) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        number()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
function number () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        # # # # #
        . # # # .
        # . # # #
        . # # . #
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # #
        . # . . .
        . # . # #
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . . . # .
        . . # . .
        `)
}
