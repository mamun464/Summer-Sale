document.getElementById("kitchenCart_1").addEventListener("click", function () {
    const itemName = getTextById("kitchen_item_1");
    // console.log(itemName);
    addToCalculationEntry(itemName);

    const productPrice = parseFloat(getTextById("kitchen_item_1_price"));
    const previousSubTotal = parseFloat(getTextById("sub_total"));
    const currentSubTotal = previousSubTotal + productPrice;
    if (isAppliedDiscount) {
        var discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
    }
    const discount = parseFloat(getTextById("discount"));
    const finalTotal = currentSubTotal - discount;

    setTextById("sub_total", currentSubTotal);
    setTextById("finalTotal", finalTotal);
    updateButtonState();
});

document.getElementById("kitchenCart_2").addEventListener("click", function () {
    const itemName = getTextById("kitchen_item_2");
    console.log(itemName);
    addToCalculationEntry(itemName);

    const productPrice = parseFloat(getTextById("kitchen_item_2_price"));
    const previousSubTotal = parseFloat(getTextById("sub_total"));
    const currentSubTotal = previousSubTotal + productPrice;
    if (isAppliedDiscount) {
        var discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
    }
    const discount = parseFloat(getTextById("discount"));
    const finalTotal = currentSubTotal - discount;

    setTextById("sub_total", currentSubTotal);
    setTextById("finalTotal", finalTotal);
    updateButtonState();
});

document.getElementById("kitchenCart_3").addEventListener("click", function () {
    const itemName = getTextById("kitchen_item_3");
    console.log(itemName);
    addToCalculationEntry(itemName);

    const productPrice = parseFloat(getTextById("kitchen_item_3_price"));
    const previousSubTotal = parseFloat(getTextById("sub_total"));
    const currentSubTotal = previousSubTotal + productPrice;
    if (isAppliedDiscount) {
        var discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
    }
    const discount = parseFloat(getTextById("discount"));
    const finalTotal = currentSubTotal - discount;

    setTextById("sub_total", currentSubTotal);
    setTextById("finalTotal", finalTotal);
    updateButtonState();
});



// sportswear js

document.getElementById("sportswearCart_1").addEventListener("click", function () {
    const itemName = getTextById("sportswear_item_1");
    console.log(itemName);
    addToCalculationEntry(itemName);

    const productPrice = parseFloat(getTextById("sportswear_item_1_price"));
    const previousSubTotal = parseFloat(getTextById("sub_total"));
    const currentSubTotal = previousSubTotal + productPrice;
    if (isAppliedDiscount) {
        var discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
    }
    const discount = parseFloat(getTextById("discount"));
    const finalTotal = currentSubTotal - discount;

    setTextById("sub_total", currentSubTotal);
    setTextById("finalTotal", finalTotal);
    updateButtonState();
});

document.getElementById("sportswearCart_2").addEventListener("click", function () {
    const itemName = getTextById("sportswear_item_2");
    console.log(itemName);
    addToCalculationEntry(itemName);

    const productPrice = parseFloat(getTextById("sportswear_item_2_price"));
    const previousSubTotal = parseFloat(getTextById("sub_total"));
    const currentSubTotal = previousSubTotal + productPrice;
    if (isAppliedDiscount) {
        var discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
    }
    const discount = parseFloat(getTextById("discount"));
    const finalTotal = currentSubTotal - discount;

    setTextById("sub_total", currentSubTotal);
    setTextById("finalTotal", finalTotal);
    updateButtonState();
});

document.getElementById("sportswearCart_3").addEventListener("click", function () {
    const itemName = getTextById("sportswear_item_3");
    console.log(itemName);
    addToCalculationEntry(itemName);

    const productPrice = parseFloat(getTextById("sportswear_item_3_price"));
    const previousSubTotal = parseFloat(getTextById("sub_total"));
    const currentSubTotal = previousSubTotal + productPrice;
    if (isAppliedDiscount) {
        var discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
    }
    const discount = parseFloat(getTextById("discount"));
    const finalTotal = currentSubTotal - discount;

    setTextById("sub_total", currentSubTotal);
    setTextById("finalTotal", finalTotal);
    updateButtonState();
});


// Furniture js

document.getElementById("furnitureCart_1").addEventListener("click", function () {
    const itemName = getTextById("furniture_item_3");
    console.log(itemName);
    addToCalculationEntry(itemName);

    const productPrice = parseFloat(getTextById("furniture_item_3_price"));
    const previousSubTotal = parseFloat(getTextById("sub_total"));
    const currentSubTotal = previousSubTotal + productPrice;
    if (isAppliedDiscount) {
        var discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
    }
    const discount = parseFloat(getTextById("discount"));
    const finalTotal = currentSubTotal - discount;

    setTextById("sub_total", currentSubTotal);
    setTextById("finalTotal", finalTotal);
    updateButtonState();
});

document.getElementById("furnitureCart_2").addEventListener("click", function () {
    const itemName = getTextById("furniture_item_2");
    console.log(itemName);
    addToCalculationEntry(itemName);

    const productPrice = parseFloat(getTextById("furniture_item_2_price"));
    const previousSubTotal = parseFloat(getTextById("sub_total"));
    const currentSubTotal = previousSubTotal + productPrice;
    if (isAppliedDiscount) {
        var discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
    }
    const discount = parseFloat(getTextById("discount"));
    const finalTotal = currentSubTotal - discount;

    setTextById("sub_total", currentSubTotal);
    setTextById("finalTotal", finalTotal);
    updateButtonState();
});

document.getElementById("furnitureCart_3").addEventListener("click", function () {
    const itemName = getTextById("furniture_item_3");
    console.log(itemName);
    addToCalculationEntry(itemName);

    const productPrice = parseFloat(getTextById("furniture_item_3_price"));
    const previousSubTotal = parseFloat(getTextById("sub_total"));
    const currentSubTotal = previousSubTotal + productPrice;
    if (isAppliedDiscount) {
        var discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
    }
    const discount = parseFloat(getTextById("discount"));
    const finalTotal = currentSubTotal - discount;

    setTextById("sub_total", currentSubTotal);
    setTextById("finalTotal", finalTotal);
    updateButtonState();
});



// Reset all value of text field
document.getElementById("btn_purchase").addEventListener("click", function () {
    setTextById("sub_total", 0.0);
    setTextById("discount", 0.0
    setTextById("finalTotal", 0.0);
    const addedPosition = document.getElementById("AddedItemList");
    addedPosition.innerHTML = "";
    const selectField = document.getElementById("coupon_code");
    selectField.value = "";
});
