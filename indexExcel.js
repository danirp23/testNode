import xls from "excel4node";

const newReport = new xls.Workbook();
const ws = newReport.addWorksheet('hojoski');
const data = [
  {
    "name": "Shadab Shaikh",
    "email": "shadab@gmail.com",
    "mobile": "1234567890"
  }
]
const headingColumnNames = [
  "Name",
  "Email",
  "Mobile",
];
//Write Column Title in Excel file
let headingColumnIndex = 1;
headingColumnNames.forEach(heading => {
  ws.cell(1, headingColumnIndex++)
    .string(heading)
});
//Write Data in Excel file
let rowIndex = 2;
data.forEach(record => {
  let columnIndex = 1;
  Object.keys(record).forEach(columnName => {
    ws.cell(rowIndex, columnIndex++)
      .string(record[columnName])
  });
  rowIndex++;
});
newReport.write('data.xlsx');
