function filterAndCal(numsArr, filterCallBack, calCallBack)
{
    let filterNums = numsArr.filter(filterCallBack);
    let result = filterNums.map(calCallBack);
    return result;
}
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterCallBack = (nums) => {
    return nums % 2 === 0;
};
let calCallBack = (num) => {
    return num * num;
}
let result = filterAndCal(numsArr, filterCallBack, calCallBack);
console.log(result);