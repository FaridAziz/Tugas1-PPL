/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const{
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    absoluteQty,
    hitungDiskon,
    total
} = require('../helpers.js')

test('Qty 1 jika ditambah 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Qty 1 jika ditambah "1" hasilnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});

test('Qty 2 jika dikurangi 1 hasilnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('Jika Qty -3, maka menjadi 1', () => {
    expect(absoluteQty(-3)).toBe(1);
});

test('jika harga 50000 dan Qty 2 hasilnya 100000', () => {
    expect(recalculateSubtotal(50000, 2)).toBe(100000);
});

test('jika harga 50000 dan Qty 2 dengan kode "KODE25" maka diskon nya 25000', () => {
    expect(hitungDiskon(50000, 2, 'KODE25')).toBe(25000);
});

test('total harga dari barang 50000 dan qty 2 dengan kode "KODE25 maka hasilnya 75000', () => {
    expect(total(50000,2,'KODE25')).toBe(75000);
});
