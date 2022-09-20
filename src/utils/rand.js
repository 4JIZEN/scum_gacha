const weightRate = {
    // common: 50,
    // uncommon: 27,
    // rare: 15,
    // epic: 7,
    // legendary: 1

    // common: 45,
    // uncommon: 25,
    // rare: 15,
    // epic: 10,
    // legendary: 5

    common: 47,
    rare: 25,
    epic: 20,
    legendary: 8
}

function getRandItems (items) {
    let choice = Math.floor(Math.random() * 101)
    let result

    choice = Math.floor(Math.random() * 101)

    for (const x in weightRate) {
        choice -= weightRate[x]
        if (choice <= 0) {
            result = x
            break
        }
    }
    
    let item = getItemsInRate(result, items);
    return item
}

function getItemsInRate (rate, items) {
    let ratesup = rate
    let itemRate = items.filter(item => item.rate === rate)
    while (itemRate.length === 0) {
        ratesup = getLowerRate(ratesup)
        itemRate = items.filter(item => item.rate === ratesup)
    }
    return itemRate[Math.floor(Math.random() * itemRate.length)]
}

function getLowerRate (currentRate) {
    const wr = Object.entries(weightRate)
    for (const i in wr) {
        if (wr[i][0] === currentRate) {
            return wr[i-1][0]
        }
    }
    return currentRate
}

export default getRandItems