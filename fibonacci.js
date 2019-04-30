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

const input = document.querySelector('.main__input');
const sequence = document.querySelector('.main__sequence');
const main = document.querySelector('.main');

input.addEventListener('input', (e) => {
  let num_local = e.target.value;
  let sequenceArr = fibonacci(num_local);
  sequence.innerHTML = `${sequenceArr}`;

  if (e.target.value === '') {
    sequence.innerHTML = '';
  };

  if (parseInt(e.target.value) > 30) {
    main.style.transform = 'translateY(-25%)';
  } else {
    main.style.transform = 'translateY(-25%)';
  }

});
