/*单线程
const fib = n => {
    if (n === 0 || n === 1) return n
    return fib(n - 1) + fib (n - 2)
}

const now = Date.now()
const result1 = fib(40)
console.log(Date.now() - now)
const result2 = fib(40)
console.log(Date.now() - now)
const result3 = fib(40)
console.log(Date.now() - now)
// 输出示例
// 1397
// 2775
// 4162
*/

const  {
    Worker,
    isMainThread,
    parentPort,
    workerData
} = require('worker_threads')

if (isMainThread) {
    const now = Date.now()

    const worker1 = new Worker(__filename, {
        workerData: 40
    })
    worker1.on('message', () => {
        console.log(Date.now() - now)
    })

    const worker2 = new Worker(__filename, {
        workerData: 40
    })
    worker2.on('message', () => {
        console.log(Date.now() - now)
    })

    const worker3 = new Worker(__filename, {
        workerData: 40
    })
    worker3.on('message', () => {
        console.log(Date.now() - now)
    })
} else {
    const fib = n => {
        if (n === 0 || n === 1) return n
        return fib(n - 1) + fib (n - 2)
    }
    const result = fib(workerData)
    parentPort.postMessage(result)
}