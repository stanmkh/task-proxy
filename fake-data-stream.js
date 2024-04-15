let counter = 0;
let randomUserIds = [];
let firstRun = true;

function nextTransaction() {

    if (firstRun) {
        firstRun = false;
        setup();
    }

    let amount = getRandomInt(1000000);

    return {
        id: crypto.randomUUID(),
        userId: randomUserIds[getRandomInt(randomUserIds.length)],
        description: "Some random text " + counter++,
        paidAmount: Math.trunc(amount / 100).toString()
        + '.' + ((amount % 100) < 10 ? '0' + (amount % 100) : (amount % 100)),
    }
}

function setup() {
    const numberOfUsers = 15 + getRandomInt(16);
    for (let i = 0; i < numberOfUsers; i++) {
        randomUserIds.push(crypto.randomUUID());
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export {nextTransaction};