console.log(
  "**********************************************************************************"
);
function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(
        `Given Month Number is ${month} then current month is January`
      );
      break;
    case 2:
      console.log(
        `Given Month Number is ${month} then current month is February`
      );
      break;
    case 3:
      console.log(`Given Month Number is ${month} then current month is March`);
      break;
    case 4:
      console.log(`Given Month Number is ${month} then current month is April`);
      break;
    case 5:
      console.log(`Given Month Number is ${month} then current month is May`);
      break;
    case 6:
      console.log(`Given Month Number is ${month} then current month is June`);
      break;
    case 7:
      console.log(`Given Month Number is ${month} then current month is July`);

      break;
    case 8:
      console.log(
        `Given Month Number is ${month} then current month is August`
      );
      break;
    case 9:
      console.log(
        `Given Month Number is ${month} then current month is September`
      );
      break;
    case 10:
      console.log(
        `Given Month Number is ${month} then current month is Octomber`
      );

      break;
    case 11:
      console.log(
        `Given Month Number is ${month} then current month is November`
      );
      break;
    case 12:
      console.log(
        `Given Month Number is ${month} then current month is December`
      );
      break;

    default:
      console.log(
        `Given month number  ${month} is Invaild,Please Enter Valid Number It will be 1 to 12`
      );
      break;
  }
}

monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
monthOfYear(NaN);
monthOfYear("a")
