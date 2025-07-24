const addBtn = document.getElementById("add-btn");

addBtn.addEventListener('click', () => {
    const textInput = document.getElementById("text-input");
    const addItem = document.getElementById("add-item");
    console.log(textInput);
    const newText = textInput.value;
    const taskItem = newText.trim();

    if (taskItem !== "") {
        const taskContainer = document.createElement("div");
        taskContainer.style.display = "flex";
        taskContainer.style.backgroundColor = "gray";
        taskContainer.style.borderRadius = "15px";
        taskContainer.style.alignItems = "center";
        taskContainer.style.margin = "5px 0px";
        taskContainer.style.marginTop = "20px";
        taskContainer.style.gap = "5px"

        const checkBox = document.createElement("input");
        checkBox.id = "check-box";
        checkBox.type = "checkbox";
        checkBox.style.marginRight = "10px";

        const label = document.createElement("span");
        label.id = "label";
        label.textContent = taskItem;
        label.style.flexGrow = "1";

        const deleteBtn = document.createElement("button");
        deleteBtn.id = "delete-btn";
        deleteBtn.textContent = "remove";
        deleteBtn.onclick = () => {
            taskContainer.remove();
        }
        taskContainer.appendChild(checkBox);
        taskContainer.appendChild(label);
        taskContainer.appendChild(deleteBtn);

        addItem.appendChild(taskContainer);
        textInput.value = "";
    }

});



