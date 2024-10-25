let calcActive = true;

const historyText = document.querySelector('.historyTxt');

while (calcActive) {
  let num1 = Number(prompt('Välj ett första tal'));
  let chosenOperator = prompt('välj en operation + - % / * ^');
  let num2 = Number(prompt('Vänligen ange ditt andra tal att räkna med'));
  let result = 0;
  if (isNaN(num1) && isNaN(num2)) {
    console.log('Error, välj ett nummer');
  } else {
    switch (chosenOperator) {
      case '+':
        console.log(num1 + num2);
        result = num1 + num2;
        alert('Resultatet av din addition är ' + result);
        break;
      case '-':
        console.log(num1 - num2);
        result = num1 - num2;
        alert('resultatet av din subrtakrion är ' + result);
        break;
      case '%':
        console.log(num1 % num2);
        result = num1 % num2;
        alert('Resultatet av modulus är ' + result);
        break;
      case '/':
        /*
            num2 === 0 ? alert('Det går inte att dela med 0') : console.log(num1 / num2)
            result = (num1 / num2)
            alert('Resultatet av din division är '+result)
            break; */
        if (num2 === 0) {
          alert('Det går inte att dela med 0');
          break;
        } else {
          console.log(num1 / num2);
          result = num1 / num2;
          alert('Resultatet av din division är ' + result);
          break;
        }
      case '*':
        console.log(num1 * num2);
        result = num1 * num2;
        alert('resultatet av din multiplikation är ' + result);
        break;
      case '^':
        console.log(num1 ** num2);
        result = num1 ** num2;
        alert('resultatet av din upphöjning är ' + result);
        break;
      default:
        console.log('Error, fel operation');
    }
  }

  historyText.innerHTML += `Resultatet av ${num1} ${chosenOperator} ${num2} är <strong>${result}</strong><br>`;

  calcActive = confirm('Vill du göra en ny beräkning?');
}
