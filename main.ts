radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 111) {
        basic.pause(100)
        radio.sendNumber(receivedNumber)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    } else if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
