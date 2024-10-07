export function tambah(a, b) { 
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input harus angka bre');
    }
    return a + b;
  } 
  
  export function kali(a, b) { 
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input harus angka sayang');
    }
    return a * b;
  }
  
  export function kurang(a, b) { 
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input harus angka sayang');
    }
    return a - b;
  }
  
  export function bagi(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input harus angka bro');
    }
    if (b === 0) {
      throw new Error('Gabisa dibagi dengan 0');
    }
    return a / b;
  }
  