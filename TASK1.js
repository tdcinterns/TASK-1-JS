function SortPrimitive(arr)
{
    let newArr = arr.filter((value) =>
    {
        return typeof value !== "object" || value === null;
    });
    return newArr;
};
let mixedArray = [101, "Hello World", {obj: "value" }, null, 42, true, false, undefined];
console.log(SortPrimitive(mixedArray));