const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculateSubtotal(price, qty) {
    return price * qty;
}

function total(price, qty, kode){
    return recalculateSubtotal(qty, price) - hitungDiskon(price, qty, kode);
}

function absoluteQty(qty) {
    return (parseInt(qty) < 1) ? 1 : qty;
}

function hitungDiskon(price, qty, kode) {
    const subTotal = recalculateSubtotal(price, qty);
    switch (kode) {
        case "KODE10":
            hasilDiskon = subTotal * 0.10;
            break;
        case "KODE25":
            hasilDiskon = subTotal * 0.25;
            break;
        case "KODE50":
            hasilDiskon = subTotal * 0.50;
            break;
        default:
            hasilDiskon = 0;
            break;
    }
    return hasilDiskon;
}

module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    absoluteQty,
    total,
    hitungDiskon
};
