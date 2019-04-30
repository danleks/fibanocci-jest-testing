const fibonacci = (num) => {
  const sequence = [0,1];

  if (
    Number.isNaN(Number(num))
    || typeof Number(num) !== 'number'
    || Number(num) < 0
    || Number(num)%1 !== 0
  ) {
    return false;
  };

  if (Number(num) === 0) return sequence[0];
  if (Number(num) === 1) return sequence[1];


  for (let i = 2; i < num; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2];
  };

  return sequence;
};

module.exports = fibonacci;

