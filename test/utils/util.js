import TablePage from '../pageobjects/table.page.js'


export const equalCheck = async (a, b)  => {
    return JSON.stringify(a) === JSON.stringify(b);
}

export const getRandomNum = (num) => {
    return Math.floor(Math.random() * num) + 1;
}

export const confirmSort = async (ind, sortBy, isNum=false) => {
    let tableValues = await TablePage.getColumnValues(ind);
    if(await isNum) {
        tableValues = await tableValues.map(item => Number(item.replace(/[^0-9.-]+/g,"")));
    }
    let sortedValues;
    if (await sortBy == "asc"){
        if(await isNum) {
            sortedValues = await [...tableValues].sort((a, b) => a - b)
        }
        else {
            sortedValues = await [...tableValues].sort()
        }
    }
    else {
        if(await isNum) {
            sortedValues = await [...tableValues].sort((a, b) => a - b).reverse();
        }
        else {
            sortedValues = await [...tableValues].sort().reverse();
        }
    }
    const isSorted = await equalCheck(tableValues, sortedValues);
    
    return isSorted;
}