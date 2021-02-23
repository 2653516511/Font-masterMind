let arr = [1,2,4,5]

try {
    arr.forEach((item, index, arr) => {
        console.log(item, index);
        if(item === 4) {
            throw new Error('item is: ' + item)
        }
    })
} catch (error) {
    console.log(error);
}
