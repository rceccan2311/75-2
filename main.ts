input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(69)
basic.forever(function () {
	
})
