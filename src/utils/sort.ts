export function sort(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}
// bubble sort function

export function bubbleSort(arr: number[]): number[] {
  console.log(arr);
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      if (current > next) {
        arr[i] = next;
        arr[i + 1] = current;
        swapped = true;
      }
    }
    console.log(arr);
  } while (swapped);
  return arr;
}

// bogo sort function
export function bogoSort(arr: number[]): number[] {
  console.log(arr);
  let sorted = false;
  do {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      if (current > next) {
        sorted = false;
        arr = shuffle(arr);
        break;
      }
    }
    console.log(arr);
  } while (!sorted);
  return arr;
}

function shuffle(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const current = arr[i];
    const random = arr[randomIndex];
    arr[i] = random;
    arr[randomIndex] = current;
  }
  return arr;
}
