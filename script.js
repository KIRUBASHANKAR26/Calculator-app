class Calculator {
    constructor(previousOperationText,currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.reset();
    }

    reset(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = '';
    }

    compute() {
        let computation
        const prev =parseFloat(this.previousOperand)
        const current =parseFloat(this.currentOperand)

        if(isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case '/':
                computation = prev / current
                break;
            case 'x':
                computation = prev * current
                break;
            default:
                return;
            
        }
        this.currentOperand = computation;
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay() {
        this.currentOperationText.innerText = 
            this.currentOperand;
        if (this.operation != null) {
            this.previousOperationText.innerText = 
            `${this.previousOperand} ${this.operation}`
        }
        else{
            this.previousOperationText.innerText = '';
        }
    }
    keyboardInput(key) 
    {
        key.preventDefault();
        if (key.which === 48) {
            this.currentOperand += "0";
            this.updateDisplay();
        } else if (key.which === 49) {
            this.currentOperand += "1";
            this.updateDisplay();
        } else if (key.which === 50) {
            this.currentOperand += "2";
            this.updateDisplay();
        } else if (key.which === 51) {
            this.currentOperand += "3";
            this.updateDisplay();
        } else if (key.which === 52) {
            this.currentOperand += "4";
            this.updateDisplay();
        } else if (key.which === 53) {
            this.currentOperand += "5";
            this.updateDisplay();
        } else if (key.which === 54) {
            this.currentOperand += "6";
            this.updateDisplay();
        } else if (key.which === 55) {
            this.currentOperand += "7";
            this.updateDisplay();
        } else if (key.which === 56) {
            this.currentOperand += "8";
            this.updateDisplay();
        } else if (key.which === 57) {
            this.currentOperand += "9";
            this.updateDisplay();
        } else if (key.which === 46) {
            this.appendNumber(".");
            this.updateDisplay();
        } else if (key.which === 42) {
            this.chooseOperation("x")
            this.updateDisplay();
        } else if (key.which === 47) {
            this.chooseOperation("/")
            this.updateDisplay();
        } else if (key.which === 43) {
            this.chooseOperation("+")
            this.updateDisplay();
        } else if (key.which === 45) {
            this.chooseOperation("-")
            this.updateDisplay();
        } else if (key.which === 13) {
            this.compute()
            this.updateDisplay()
        }else if (key.which === 40) {
            this.delete()
            this.updateDisplay()
        }else if (key.which === 114) {
            this.reset()
            this.updateDisplay()
        }
        else {
            this.currentOperand = this.currentOperand;
        }
    }
    keyboardInputBackspace(key){
        if (key.keyCode === 8){
            this.delete()
            this.updateDisplay()
        }
    }
}
const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const previousOperationText = document.querySelector('[data-previous-operand]');
const currentOperationText = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperationText,currentOperationText);


window.addEventListener("keypress", (e) => {
    calculator.keyboardInput(e)
})
window.addEventListener("keydown", (e) => {
    calculator.keyboardInputBackspace(e)
 })
//console.log(window.addEventListener("keypress",keyboardInput))

numberButton.forEach(button => {

    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })

})
resetButton.addEventListener("click", () => {
    calculator.reset();
    calculator.updateDisplay();
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.innerText);
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener("click",() => {
    calculator.compute()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", () => {
    calculator.delete()
    calculator.updateDisplay()
})


////////////////////////theme//////////////////////////

const themeSlider = document.getElementById("slider");

themeSlider.value = 1;


themeSlider.addEventListener("input", (e) => {


    if(parseInt(themeSlider.value) === 1) {

        document.body.classList.remove("theme-2");
        document.body.classList.remove("theme-3");
    }
    
    else if(parseInt(themeSlider.value) === 2) {

        document.body.classList.add("theme-2");
        document.body.classList.remove("theme-3");
    }
    
    else if(parseInt(themeSlider.value) === 3) {

        document.body.classList.remove("theme-2");
        document.body.classList.add("theme-3");
    }
})
