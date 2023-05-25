input.onButtonPressed(Button.A, function () {
    basic.showNumber(maior_valor)
})
let maior_valor = 0
let valor = 0
maior_valor = 0
basic.forever(function () {
    valor = pins.analogReadPin(AnalogPin.P1)
    if (valor > maior_valor) {
        maior_valor = valor
    }
})
