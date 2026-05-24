//================
//-- QUESTION 1 --
//================
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3); //QUESTION 1 OUTPUT

//================
//-- QUESTION 2 --
//================

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1); //QUESTION 2 OUTPUT

//================
//-- QUESTION 3 --
//================

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.slice(0, 1)}. ${lastName}`;
}

console.log(printTeacher(teacher3.firstName, teacher3.lastName)); //QUESTION 3 OUTPUT

//================
//-- QUESTION 4 --
//================

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  constructor(
    private firstName: string,
    private lastName: string
  ) { }

  workOnHomework(): string {
    return `Currently working`;
  }

  displayName(): string {
    return this.firstName;
  }
}

//OUTPUT FOR QUESTION 4
const student1: StudentClass = new StudentClass('This', 'Guy');
console.log(student1.displayName());
console.log(student1.workOnHomework());
