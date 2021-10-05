// Jesse Hughes 101244671
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(array) {
    var lowerCaseArray = []
    let p = new Promise((resolve, reject) => {
        for (let i = 0; i < array.length; i++) {
            const element1 = array[i]
            if (typeof element1 == 'string') {
                lowerCaseArray.push(element1.toLowerCase())
            }
        }
        if (lowerCaseArray.length != 0) {
            resolve(lowerCaseArray)
        } else {
            reject('There are no strings in the array')
        }
    })
    p.then((message) => {
        console.log(message) 
    }).catch((message) => {
        console.log(message)
    })
}

lowerCaseWords(mixedArray)

