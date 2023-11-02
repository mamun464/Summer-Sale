let isAppliedDiscount = false;
function updateButtonState() {
    const SubTotal = parseFloat(getTextById("sub_total"));
    const finalTotal = parseFloat(getTextById("finalTotal"));

    console.log(SubTotal);

    if (SubTotal >= 200) {
        btn_discount.disabled = false;
        btn_discount.classList.remove("disabled");
    }
    if (finalTotal > 0) {
        btn_purchase.disabled = false;
        btn_purchase.classList.remove("disabled");
    }

}

