const fibonacci = (num) => {
    const sequence = [0,1];

    if (Number.isNaN(num) || typeof num !== 'number' || num < 0) {
      return false;
    };

    if (num === 0) return sequence[0];
    if (num === 1) return sequence[1];


    for (let i = 2; i < num; i++) {
      sequence[i] = sequence[i-1] + sequence[i-2];
    };

    return sequence;
};


module.exports = fibonacci;

