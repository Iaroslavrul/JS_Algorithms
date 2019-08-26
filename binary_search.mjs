export default (arr, guessNum) => {
    let first = 0;
    let last = arr.length - 1;
    let counter = 0;
    while (first <= last && arr[first] <= guessNum && guessNum <= arr[last]) {
        let middle;
        middle = Math.round((first + last) / 2);
        if (guessNum == arr[middle]) return counter;
        else if (guessNum < arr[middle]) {
            last = middle - 1;
            counter += 1
        } else {
            first = middle + 1;
            counter += 1
        }
    }
    return null
}