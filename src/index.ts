// Task 1
let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback = (a: number): number => { return 100 + a };

// Task 2
let anything: any = -20;
anything = 'Text';
anything = {};

// Task 3
let some:unknown;
some = 'Text';
let str: string;
if (typeof some === "string") { 
  str = some;
}

// Task 4
let person: [string, number] = ['Max', 21];

// Task 5
let mixedType: string | number;
type EnableDisable = "disable" | "enable";
let varEnableDisable: EnableDisable;

// Task 6
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// Task 7
enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

const isWeekend = (day: Day): boolean => {
  if (day === Day.SATURDAY || day === Day.SUNDAY) {
    return true;
  }
  return false;
}

// Task 8
type Gender = "male" | "female";
let myGender: Gender = "male";
myGender = "female";
//myGender = "non-binary";

// Task 9
type Details = {
  createAt: Date,
  updateAt: Date
}

type Page = {
  title: string,
  likes: number,
  accounts: string[],
  status: "open" | "close",
  details?: Details
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};