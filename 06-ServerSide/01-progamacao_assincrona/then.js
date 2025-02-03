const randomValue = Math.round(Math.random() * 10);
console.log("randomValue =", randomValue);

function firstFunction () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (randomValue > 2) {
                console.log("First task executed with success!")
                resolve("First task is done")
            } else {
                reject(new Error("First task failed"))
            }
        },2000)
    })
}


function secondFunction (firsFunctionResult) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (randomValue > 4) {
                console.log("Second task executed with success!")
                resolve("Second task is done")
            } else {
                reject(new Error("Second task failed"))
            }
        },2000)
    })
}



async function thirdFunction () {

        firstFunction()
        .then((FirstResult) => secondFunction(FirstResult))
        .then((secondResult) => console.log("Terceira função executada com sucesso, Êxito em ambas as funções ->", secondResult))
        .catch((error) => console.log("Erro na terceira função devido a erro ->", error))
}

thirdFunction()


