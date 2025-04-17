
const numbers: number[] = [2, 6, 4]

const setUpCounts = (numbesList: number[]) => {
    let ListToPrint: string = "\n";

    for (let ActualNumber of numbesList) {
        for (let i: number = 0; i <= 10; i++) {

            ListToPrint += `${ActualNumber} x ${i} = ${ActualNumber * i} \n`;
        }

        ListToPrint += `\n\n\n ---------------------------------`;
    }

    console.log(ListToPrint)
}

setUpCounts(numbers);