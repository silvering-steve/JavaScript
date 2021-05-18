const { averageExam, isStudentPass } = require("../gradeCalc");

describe("grade calc", () => {
  test("it should work right ?", () => {
    const listValues = [100, 80, 80, 100];
    expect(averageExam(listValues)).toEqual(90);
  });

  /**
   * Yes or no test
   */

  test("Budi should pass", () => {
    const listValues = [100, 80, 80, 100];
    expect(isStudentPass(listValues, "Budi")).toEqual(true);
  });

  test("Budi should not pass", () => {
    const listValues = [50, 60, 10, 20];
    expect(isStudentPass(listValues, "Budi")).toEqual(false);
  });
});
