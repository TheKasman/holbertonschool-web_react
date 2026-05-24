/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud'

//create object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

//insert row
const newRowId: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

CRUD.updateRow(newRowId, updatedRow);

CRUD.deleteRow(newRowId);
