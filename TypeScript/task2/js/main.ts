//================
//-- QUESTION 5 --
//================

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  }

  getCoffeeBreak(): string {
    return `Getting a coffee break`;
  }

  workDirectorTasks(): string {
    return `Getting to director tasks`;
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return `Cannot work from home`;
  }

  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }

  workTeacherTasks(): string {
    return `Getting to work`;
  }
}

function createEmployee(salary: string | number): Teacher | Director {
  if (salary < 500 && typeof salary === 'number') {
    return new Teacher();
  }
  return new Director();
}

// OUTPUT FOR QUESTION 5
//
// DISPLAYS AS OBJECT BUT UPON EXPENDING THE OBJECT
// YOU CAN SEE THE FUNCTIONS ARE DIFFERENT
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('500'));


//================
//-- QUESTION 6 --
//================

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// OUTPUT FOR QUESTION 6
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


//================
//-- QUESTION 7 --
//================

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return `Teaching Math`;
  }
  return `Teaching History`;
}


//QUESTION 7 OUTPUT
console.log(teachClass('Math'));
console.log(teachClass('History'));
