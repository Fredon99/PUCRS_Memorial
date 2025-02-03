const randomValue = Math.round(Math.random() * 10);
console.log("randomValue =", randomValue);

async function firstFunction () {
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


async function secondFunction (firsFunctionResult) {
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
    try {
        const firstResult = await firstFunction();
        console.log("FirstResult: ",firstResult);
        const secondResult = await secondFunction(firstResult);
        console.log("Terceira tarefa finalizada:", secondResult)
    } catch (error) {
        console.log("Erro ocorrido:", error)
        throw error;
    }
}

thirdFunction()


