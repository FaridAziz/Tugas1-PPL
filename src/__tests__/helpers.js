/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const{
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    absoluteQty
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
