let rock = 0
let paper = 0
let scissors = 0
let amogla = 0
input.onButtonPressed(Button.A, function () {
    rock = 0
    paper = 0
    scissors = 0
    for (let index = 0; index < 2; index++) {
        amogla = randint(0, 2)
        if (amogla == 0) {
            basic.showLeds(`
                . . # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # # #
                . . # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # . .
                . . # # #
                . . # # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # . .
                # # # # #
                . . # # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # . . .
                # # # # #
                . . # # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . .
                # # # # #
                . # # # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            paper = 1
        } else if (amogla == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . # # # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . # # # .
                . # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # # .
                . # # # .
                . # # # .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # .
                . # # # .
                . # # # .
                `)
            basic.showLeds(`
                . # . # .
                . . . . #
                # . # # .
                . # # # .
                . # # # .
                `)
            basic.showLeds(`
                . . . . #
                # . . . .
                . . # # .
                . # # # .
                . # # # .
                `)
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # # .
                . # # # .
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # .
                . # # # .
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . # . .
                . # # # .
                . # # # .
                `)
            basic.showLeds(`
                . . . . #
                . # . . .
                . . # . .
                . # # . .
                . # # # .
                `)
            basic.showLeds(`
                # . . . .
                . . . # .
                . . . . .
                . # # . .
                . # # # .
                `)
            basic.showLeds(`
                . . . # .
                . . . . .
                # . . . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                # . . . .
                . . . # .
                . . . . .
                . # # # .
                `)
            basic.showLeds(`
                # . . . .
                . . . # .
                . # . . .
                . . . . .
                . . # # .
                `)
            basic.showLeds(`
                . . . # .
                . # . . .
                . . . . #
                . . . . .
                . . # . .
                `)
            basic.showLeds(`
                . # . . .
                . . . . #
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            rock = 1
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            basic.showLeds(`
                # # . . .
                # # . # #
                . . # . .
                # # . # #
                # # . . .
                `)
            basic.showLeds(`
                # # . . .
                # # . . .
                . . # # #
                # # . . .
                # # . . .
                `)
            basic.showLeds(`
                # # . . .
                # # . # #
                . . # . .
                # # . # #
                # # . . .
                `)
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            scissors = 1
        }
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . # # .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . # # . .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (paper == 1 && rock == 1) {
        led.plotBrightness(0, 0, 100)
        led.plotBrightness(0, 1, 100)
        led.plotBrightness(1, 1, 100)
        led.plotBrightness(2, 1, 100)
        led.plotBrightness(3, 1, 100)
        led.plotBrightness(3, 0, 100)
        led.plotBrightness(4, 1, 100)
        led.plotBrightness(5, 0, 100)
        led.plotBrightness(5, 1, 100)
        basic.showLeds(`
            # . # . #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.showString("Paper Wins!")
    } else {
        basic.clearScreen()
    }
    if (paper == 1 && scissors == 1) {
        led.plotBrightness(0, 0, 100)
        led.plotBrightness(0, 1, 100)
        led.plotBrightness(1, 1, 100)
        led.plotBrightness(2, 1, 100)
        led.plotBrightness(3, 1, 100)
        led.plotBrightness(3, 0, 100)
        led.plotBrightness(4, 1, 100)
        led.plotBrightness(5, 0, 100)
        led.plotBrightness(5, 1, 100)
        basic.showLeds(`
            # . # . #
            # # # # #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(1000)
        basic.showString("Scissors Win!")
    } else {
        basic.clearScreen()
    }
    if (paper == 1 && paper == 1) {
        led.plotBrightness(0, 0, 100)
        led.plotBrightness(0, 1, 100)
        led.plotBrightness(1, 1, 100)
        led.plotBrightness(2, 1, 100)
        led.plotBrightness(3, 1, 100)
        led.plotBrightness(3, 0, 100)
        led.plotBrightness(4, 1, 100)
        led.plotBrightness(5, 0, 100)
        led.plotBrightness(5, 1, 100)
        basic.showLeds(`
            # . # . #
            # # # # #
            . # . # .
            . . # . .
            . # . # .
            `)
        basic.pause(1000)
        basic.showString("Tie!")
    } else {
        basic.clearScreen()
    }
    if (rock == 1 && scissors == 1) {
        led.plotBrightness(0, 0, 100)
        led.plotBrightness(0, 1, 100)
        led.plotBrightness(1, 1, 100)
        led.plotBrightness(2, 1, 100)
        led.plotBrightness(3, 1, 100)
        led.plotBrightness(3, 0, 100)
        led.plotBrightness(4, 1, 100)
        led.plotBrightness(5, 0, 100)
        led.plotBrightness(5, 1, 100)
        basic.showLeds(`
            # . # . #
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(1000)
        basic.showString("Rock Wins!")
    } else {
        basic.clearScreen()
    }
    if (rock == 1 && rock == 1) {
        led.plotBrightness(0, 0, 100)
        led.plotBrightness(0, 1, 100)
        led.plotBrightness(1, 1, 100)
        led.plotBrightness(2, 1, 100)
        led.plotBrightness(3, 1, 100)
        led.plotBrightness(3, 0, 100)
        led.plotBrightness(4, 1, 100)
        led.plotBrightness(5, 0, 100)
        led.plotBrightness(5, 1, 100)
        basic.showLeds(`
            # . # . #
            # # # # #
            . # . # .
            . . # . .
            . # . # .
            `)
        basic.pause(1000)
        basic.showString("Tie!")
    } else {
        basic.clearScreen()
    }
    if (scissors == 1 && scissors == 1) {
        led.plotBrightness(0, 0, 100)
        led.plotBrightness(0, 1, 100)
        led.plotBrightness(1, 1, 100)
        led.plotBrightness(2, 1, 100)
        led.plotBrightness(3, 1, 100)
        led.plotBrightness(3, 0, 100)
        led.plotBrightness(4, 1, 100)
        led.plotBrightness(5, 0, 100)
        led.plotBrightness(5, 1, 100)
        basic.showLeds(`
            # . # . #
            # # # # #
            . # . # .
            . . # . .
            . # . # .
            `)
        basic.pause(1000)
        basic.showString("Tie!")
    } else {
        basic.clearScreen()
    }
    basic.clearScreen()
    basic.showString("Game Over!")
})
input.onButtonPressed(Button.B, function () {
	
})
