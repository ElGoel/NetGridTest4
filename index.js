const countDuplicate = (arr) => {
    const uniqueMap = {};
    let numbersRepeated = 0;
    for (let i = 0; i < arr.length; i++) {
        if(uniqueMap[arr[i]]) {
            uniqueMap[arr[i]] = uniqueMap[arr[i]] + 1
        } else {
            uniqueMap[arr[i]] = 1
        }
    }

    Object.keys(uniqueMap).forEach((k) => {
        if(uniqueMap[k] > 1){
            numbersRepeated += 1
        }
    });

    return numbersRepeated;  
}

console.log(countDuplicate([1,2,3,4,5,6,6,7,8,8,8,8,3]));