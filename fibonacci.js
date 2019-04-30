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

const input = document.querySelector('.main__input');
const sequence = document.querySelector('.main__sequence');

input.addEventListener('input', (e) => {
  let num_local = parseInt(e.target.value);
  let sequenceArr = fibonacci(num_local);
  sequence.innerHTML = `${sequenceArr}`;

  if (e.target.value === '') {
    sequence.innerHTML = '';
  };

});
