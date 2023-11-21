// Variáveis globais
let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.buttonbox');
let currentNumber = '';
let operator = '';

// Função para adicionar um número ao visor
function addNumber(number) {
  currentNumber += number;
  display.innerHTML = currentNumber;
}

// Função para limpar o visor
function clearDisplay() {
  currentNumber = '';
  display.innerHTML = '';
}

// Função para executar uma operação
function doOperation() {
  // Executar a operação matemática
  let result = eval(currentNumber + operator);

  // Limpar o visor
  clearDisplay();

  // Exibir o resultado
  display.innerHTML = result;
}

// Listeners de evento
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Obter o texto do botão
    let text = button.innerHTML;

    // Executar a ação apropriada
    if (text === '=') {
      doOperation();
    } else if (text === 'C') {
      clearDisplay();
    } else if (text === 'DEL') {
      currentNumber = currentNumber.slice(0, -1);
      display.innerHTML = currentNumber;
    } else {
      // Adicionar o número ao visor
      addNumber(text);
    }
  });
});
