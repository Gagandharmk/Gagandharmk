$(document).switch(furittype) {
  case "narangi":
    console.log("narangi hai 60rs Killo.");
    break;
  case 'sabe':
    console.log("sabe hai 100rs killo.");
    break;
  case 'kele':
    console.log("kele hai 30rs ki aada darjan.");
    break;
  case 'amrudh':
    console.log("amurid mil jayege 80rs killo");
    break;
  case 'aam':
    console.log("aalm dya hai 300rs ki darjan");
    break;
  case 'papita':
    console.log("papita v 300 ka he hai.");
    break;
  default:
    console.log(`${furittype} ajj khatam hogaya hai kal aaega`);
}
console.log("Or kuch chaiye");