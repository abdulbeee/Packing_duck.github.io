function addInput() {
    var inputContainer = document.getElementById("inputContainer");
    var newInputRow = document.createElement("div");
    newInputRow.className = "input-row";
    newInputRow.innerHTML = '<input type="text" name="inputText" placeholder="Masukkan teks">' +
                            '<input type="checkbox" onchange="toggleComplete(this)">' +
                            '<button onclick="removeInput(this)">-</button>';
    inputContainer.appendChild(newInputRow);
}

function removeInput(button) {
    var inputRow = button.parentNode;
    inputRow.parentNode.removeChild(inputRow);
}

function toggleComplete(checkbox) {
    var inputText = checkbox.previousElementSibling;
    inputText.classList.toggle("completed", checkbox.checked);
}

function saveInputs() {
    var savedInputsDiv = document.getElementById("savedInputs");
    savedInputsDiv.innerHTML = ""; // Clear previous inputs
    
    var inputRows = document.querySelectorAll(".input-row input[name='inputText']");
    inputRows.forEach(function(input) {
        var inputText = input.value;
        var paragraph = document.createElement("p");
        paragraph.textContent = inputText;
        savedInputsDiv.appendChild(paragraph);
    });
}
