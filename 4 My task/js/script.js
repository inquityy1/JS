function myFunction() {
  const table = document.getElementById("myTable");
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = 1;
  cell2.innerHTML = myText.value;
  cell3.innerHTML = "dsa";
}

document.getElementById("submit").addEventListener("click", myFunction);
