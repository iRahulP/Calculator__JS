var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

var op1 = 0;
var op2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            op1 = parseFloat(text);
            display.textContent = "";
        } else if (value == "ac") {
            display.textContent = "";
        } else if (value == "sign") {
            op1 = parseFloat(text);
            op1 = -1 * op1;
            display.textContent = op1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            op1 = parseFloat(text);
            op1 = op1 / 100;
            display.textContent = op1
        } else if (value == "=") {
            op2 = parseFloat(text);
            var result = eval(op1 + ' ' + operator + ' ' + op2);
            if (result) {
                display.textContent = result;
                op1 = result;
                op2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}
