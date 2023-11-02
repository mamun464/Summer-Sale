
document.getElementById("btn_discount").addEventListener("click", function () {

    const discountCoupon = getValueFieldByID("coupon_code");
    if (discountCoupon == "SELL200") {
        isAppliedDiscount = true;
        const currentSubTotal = parseFloat(getTextById("sub_total"));
        const discounted_amount = (currentSubTotal * 0.2).toFixed(2);
        setTextById("discount", discounted_amount);
        // alert("Applied Coupon");
    } else {
        isAppliedDiscount = false;
        setTextById("discount", 0);
        alert("Invalid discount Code!");
    }
});
