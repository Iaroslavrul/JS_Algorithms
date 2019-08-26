export default (countOfNum) => {
    let max, randomNum;
    let i = 0;
    let finalArr = [];
    let min = i;
    while (i < countOfNum) {
        max = min + 20;
        randomNum = Math.floor(Math.random() * (max - min)) + min;
        finalArr.push(randomNum);
        min = randomNum + 1;
        i += 1
    }
    return finalArr
}