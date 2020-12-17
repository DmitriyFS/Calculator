// var buttonPlus = document.getElementById('buttonPlus')
// var buttonMinus = document.getElementById('buttonMinus')
// var buttonMultiply = document.getElementById('buttonMultiply')
// var buttonDevide = document.getElementById('buttonDevide')

//var operatinButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide]

var operatinButtons = document.getElementsByClassName('operation-button')

var input1 = document.getElementById('number1')
var input2 = document.getElementById('number2')

function makeOperation(operationCode) {
    var number1 = Number(input1.value)
    var number2 = Number(input2.value)

    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else {
        var result = number1 / number2;
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operations = clickedElement.innerHTML;
    makeOperation(operations);
}



for (var i = 0; i < operatinButtons.length; i++) {
    var button = operatinButtons[i];
    button.addEventListener('click', onOperationButtonClick);

}