const addButton = document.getElementById("addButton");
const inputField = document.getElementById("inputField");
const tasksList = document.getElementById("tasksList");

addButton.addEventListener("click", addTask);

function addTask() {
  if (inputField.value === "") {
    alert("Nazwa zadania nie może być pusta.");
  } else {
    const li = document.createElement("li");
    li.innerText = inputField.value;
    li.setAttribute("class", "task");
    tasksList.append(li);
    inputField.value = "";
    let textToEdit = li.textContent;

    const editButton = document.createElement("button");
    editButton.setAttribute("class", "editButton");
    editButton.innerText = "Edytuj";
    const commitChangeButton = document.createElement("button");
    commitChangeButton.setAttribute("class", "commitChangeButton");
    commitChangeButton.innerText = "Zatwierdź zmiany";
    commitChangeButton.style.display = "none";
    const delButton = document.createElement("button");
    delButton.setAttribute("class", "delButton");
    delButton.innerText = "Usuń";
    li.append(editButton, delButton);

    editButton.addEventListener("click", function () {
      const fieldToEdit = document.createElement("input");
      fieldToEdit.setAttribute("value", textToEdit);
      li.textContent = "";
      commitChangeButton.style.display = "inline";
      li.prepend(fieldToEdit, commitChangeButton, delButton);

      commitChangeButton.addEventListener("click", function () {
        if (fieldToEdit.value === "") {
          alert("Nazwa zadania nie może być pusta.");
        } else {
          li.innerText = fieldToEdit.value;
          li.append(editButton, delButton);
          editButton.style.display = "inline";
          textToEdit = fieldToEdit.value;
        }
      });
    });

    delButton.addEventListener("click", function () {
      li.remove();
    });
  }
}
