/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
   Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

const today: DayOfWeek = DayOfWeek.Saturday;

if (isWeekend(today)) {
  console.log('Сьогодні вихідний!');
} else {
  console.log('Сьогодні робочий день.');
}