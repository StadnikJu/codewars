// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci 
// function that given a signature array/list, returns the first n elements - signature
// included of the so seeded sequence.


function tribonacci(signature, n) {
  if (n === 0) return [];

  const array = [...signature];

  for (let i = 0; i < n - 3; i++) {
    const next =
      array[array.length - 1] +
      array[array.length - 2] +
      array[array.length - 3];

    array.push(next);
  }

  return array.slice(0, n);
}