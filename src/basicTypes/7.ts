// Task 7
enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const isWeekend = (day: Day): boolean => {
  if (day === Day.SATURDAY || day === Day.SUNDAY) {
    return true;
  }
  return false;
};

export {};
