interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Uliana',
  lastName: 'GPT',
  age: 26,
  location: 'Melbourne'
};

const student2: Student = {
  firstName: 'Ebon',
  lastName: 'Abgrund',
  age: 33,
  location: 'Melbourne'
};

const StudentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = table.createTHead();

const header = thead.insertRow();

const headers: (keyof Student)[] = ['firstName', 'location'];
headers.forEach(key => {
  const th = document.createElement('th');
  th.innerText = key;
  header.appendChild(th);
});

const tbody = table.createTBody();
StudentsList.forEach(Student => {
  const tr = tbody.insertRow();
  headers.forEach(key => {
    const td = tr.insertCell();
    td.innerText = String(Student[key]);
  });
});

document.body.appendChild(table);
