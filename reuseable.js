function getTextById(elementID) {
    const element = document.getElementById(elementID);
    const elementText = element.innerText;
    return elementText;
};

// Add to list after clicking item

function addToCalculationEntry(item) {
    const addedPosition = document.getElementById("AddedItemList");
    const newEntry = document.createElement("p");
    const count = addedPosition.childElementCount + 1;
    newEntry.classList.add("my-4");
    newEntry.innerHTML = `${count}. ${item}`;
    addedPosition.appendChild(newEntry);
};

function setTextById(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
};

function updateSubTotal(amountToUpdate) {

};

function getValueFieldByID(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldText = (field.value);
    return fieldText;
}