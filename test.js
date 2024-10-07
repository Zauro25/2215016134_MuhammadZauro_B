import { expect } from 'chai';
import { tambah, kali, kurang, bagi } from './math.js';

describe('Pengujian Fungsi Matematika', function() {
  it('haruse mengembalikan 4 pas nambahin 2 + 2', function() {
    expect(tambah(2, 2)).to.equal(4);
  });

  it('haruse mengembalikan 6 pas ngali in 2 * 3', function() {
    expect(kali(2, 3)).to.equal(6);
  });

  it('haruse mengembalikan 0 pas ngurangin 2 - 2', function() {
    expect(kurang(2, 2)).to.equal(0);
  });

  it('haruse mengembalikan 2 pas bagi 6 / 3', function() {
    expect(bagi(6, 3)).to.equal(2);
  });

  it('haruse mengembalikan error pas bagi dengan 0', function() {
    expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
  });

  it('haruse mengembalikan -5 pas ngurangin 0 - 5', function() {
    expect(kurang(0, 5)).to.equal(-5);
  });

  it('haruse mengembalikan error pas mbagii string dengan angka', function() {
    expect(() => bagi("6", 3)).to.throw('Input harus angka bro');
  });

  it('haruse mengembalikan error pas nambahin string dengan angka', function() {
    expect(() => tambah("2", 3)).to.throw('Input harus angka bre');
  });

  it('haruse mengembalikan error pas ngali in null dengan angka', function() {
    expect(() => kali(null, 3)).to.throw('Input harus angka sayang');
  });
});
