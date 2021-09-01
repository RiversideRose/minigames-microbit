input.onPinPressed(TouchPin.P0, function () {
    rng2 = randint(1, 2)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
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
    if (rng2 == 1) {
        basic.showIcon(IconNames.Skull)
    } else {
        if (rng2 == 2) {
            basic.showIcon(IconNames.Sword)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    rock = 0
    paper = 0
    scissors = 0
    for (let index = 0; index < 2; index++) {
        rng1 = randint(0, 2)
        if (rng1 == 0) {
            radio.sendString("Paper")
            radio.sendValue("Paper", 1)
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
                # # . . .
                . . # # #
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
        } else if (rng1 == 1) {
            radio.sendString("Rock")
            radio.sendValue("Rock", 1)
            rock = 1
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
        } else {
            radio.sendString("Scissors")
            scissors = 1
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
        }
    }
    radio.sendValue("splode", 1)
    radio.sendString("\"boom\"")
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
        . # # # .
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
        radio.sendString("pwin")
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
        radio.sendString("Paper Wins!")
        basic.showString("Paper Wins!")
    } else {
        basic.clearScreen()
    }
    if (paper == 1 && scissors == 1) {
        radio.sendValue("swin", 1)
        radio.sendString("swin")
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
        radio.sendString("Scissors Win!")
        basic.showString("Scissors Win!")
    } else {
        basic.clearScreen()
    }
    if (paper == 1 && paper == 1) {
        radio.sendString("tie")
        radio.sendValue("tie", 1)
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
        radio.sendString("Tie!")
        basic.showString("Tie!")
    } else {
        basic.clearScreen()
    }
    if (rock == 1 && scissors == 1) {
        radio.sendString("rwin")
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
        radio.sendString("Rock Wins!")
        basic.showString("Rock Wins!")
    } else {
        basic.clearScreen()
    }
    if (rock == 1 && rock == 1) {
        radio.sendString("tie")
        radio.sendValue("tie", 1)
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
        radio.sendString("Tie!")
        basic.showString("Tie!")
    } else {
        basic.clearScreen()
    }
    if (scissors == 1 && scissors == 1) {
        radio.sendString("tie")
        led.plotBrightness(0, 0, 100)
        radio.sendValue("tie", 1)
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
        radio.sendString("Tie!")
        basic.showString("Tie!")
    } else {
        basic.clearScreen()
    }
    basic.clearScreen()
    radio.sendString("Game Over!")
    basic.showString("Game Over!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Created by Riversde, https://github.com/riversiderose/rockpaperscissors-microbit")
})
radio.onReceivedString(function (receivedString) {
    let pwin = 0
    if (receivedString == "Paper") {
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
            # # . . .
            . . # # #
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
    } else if (receivedString == "Rock") {
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
    } else {
        if (receivedString == "Scissors") {
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
        }
    }
    if (receivedString == "\"boom\"") {
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
            . # # # .
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
    }
    if (receivedString == "rwin") {
        basic.showLeds(`
            # . # . #
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(1000)
        basic.showString("Rock Wins!")
    } else if (pwin == 1) {
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
        if (receivedString == "swin") {
            basic.showLeds(`
                # . # . #
                # # # # #
                # . . . #
                . # . # .
                . . # . .
                `)
        }
    }
    if (receivedString == "tie") {
        basic.showLeds(`
            # . # . #
            # # # # #
            . # . # .
            . . # . .
            . # . # .
            `)
        basic.pause(1000)
        basic.showString("Tie!")
    }
    if (receivedString == "Game Over!") {
        basic.showString("Game Over!")
    }
})
let rng1 = 0
let scissors = 0
let paper = 0
let rock = 0
let rng2 = 0
radio.setGroup(1)
