function upload() {
  const table = document.getElementById("myTable");
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = table.rows.length - 1;
  cell2.innerHTML = myText.value;
  cell3.innerHTML =
    '<button id="delete" onclick="deleteRow(this)" name="delete">DELETE</button>';
}

function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}

document.getElementById("submit").addEventListener("click", upload);
