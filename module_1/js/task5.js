let userInput = prompt('Введите название страны');
const normalizedInput = userInput.toLowerCase();
console.log(normalizedInput);
let message;

switch (normalizedInput) {
  case 'китай':
    message = 'Доставка в Китай будет стоить 100 кредитов';

    break;
  case 'чили':
    message = 'Доставка в Чили будет стоить 250 кредитов';

    break;
  case 'австралия':
    message = 'Доставка в Австралия будет стоить 170 кредитов';

    break;
  case 'индия':
    message = 'Доставка в Индия будет стоить 80 кредитов';

    break;
  case 'ямайка':
    message = 'Доставка в Китай будет стоить 120 кредитов';

    break;
  default:
    message = 'В вашей стране доставка не доступна';
}
console.log(message);
alert(message);
