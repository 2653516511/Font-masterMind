
function promiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        let res = [], count = 0
        for(let i = 0; i < promiseAll.length; ++i) {
            promiseArr[i].then((v) => {
                count++
                res[i] = v
                if(count === promiseArr.length) [
                    resolve(res)
                ]
            }, (r) => {
                reject(r)
            })
        }
    })
}