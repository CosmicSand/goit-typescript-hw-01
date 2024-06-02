enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: keyof DayOfWeek): boolean => {
  if (
    day === DayOfWeek[DayOfWeek.Saturday] ||
    day === DayOfWeek[DayOfWeek.Sunday]
  ) {
    return true;
  }
  return false;
};
