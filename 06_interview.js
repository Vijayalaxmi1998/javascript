var interview = function (gradScore, hscScore, sscScore, condidateName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
    console.log(`Congrates ${condidateName} you are eligiblefor TSC interview`);
  } else {
    console.log(`Unfortunately ${condidateName} you are not eligible for exam`);
  }
};
interview(80, 86, 90, "vijayalaxmi");
interview(70, 65, 55, "Shridevi");
interview(60, 79, 88, "Rohit");
