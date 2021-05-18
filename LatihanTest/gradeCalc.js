const averageExam = (valuesExams) => {
  const numberValidation = valuesExams.every((exam) => typeof exam === "number");
  if (!numberValidation) throw Error("Input Number");

  const sumValues = valuesExams.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sumValues / valuesExams.length;
};

const isStudentPass = (valuesExams, name) => {
  const minValue = 75;
  const average = averageExam(valuesExams);

  if (average > minValue) {
    console.log(`${name} Pass`);
    return true;
  } else {
    console.log(`${name} Failed`);
    return false;
  }
};

module.exports = { averageExam, isStudentPass };
