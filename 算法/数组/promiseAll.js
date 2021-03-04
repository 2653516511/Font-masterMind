
function promiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        let res = [], count = 0
        for(let i = 0; i < promiseAll.length; ++i) {
            // promise.resolve(a)：会将a包装成一个promise
            Promise.resolve(promiseArr[i]).then((v) => {
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
function promiseRace(promiseArr) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promiseArr)) {
            return reject(new Error('请输入一个数组'))
        }
        for(let i = 0; i < promiseArr.length; ++i) {
            Promise.resolve(promiseArr[i]).then((v) => {
                resolve(v)
            }, (r) => {
                reject(r)
            })
        }

    })
}