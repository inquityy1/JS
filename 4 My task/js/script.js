function upload() {
  const table = document.getElementById("add-row");
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = table.rows.length - 1;
  cell2.innerHTML = myText.value;
  cell3.innerHTML =
    '<button id="delete" onclick="deleteRow(this)" name="delete">DELETE</button>';
}

// function deleteRow(r) {
//   const i = r.parentNode.parentNode.rowIndex;
//   document.getElementById("add-row").deleteRow(i);
// }

function deleteRow(row) {
  let i = row.parentNode.parentNode.rowIndex;
  if (i > 1) {
    document.getElementById("add-row").deleteRow(i);
    update_number(i);
  } else {
    document.getElementById("add-row").deleteRow(i);
    update_number(i);
  }
}

function update_number(i) {
  let table = document.getElementById("add-row");
  for (let r = 1, n = table.rows.length; r < n; r++) {
    for (let c = 0, m = table.rows[r].cells.length; c < 1; c++) {
      let table_date = table.rows[r].cells[0].innerHTML;
      if (!isNaN(table_date)) {
        if (i < table_date) {
          let new_data = table_date - 1;
          table.rows[r].cells[0].innerHTML = new_data;
        }
      }
    }
  }
}

document.getElementById("submit").addEventListener("click", upload);
