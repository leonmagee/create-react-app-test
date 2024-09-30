export const currencyConvert = (input: string|number): string => {
    // "$1,100.00" → 1100.00;
    if(typeof input == "number") {
        return input.toFixed(2);
    }
    // const stringNew = input.replace("$", "").replace(",","");
    return Number(input.replace(/[^0-9.]+/g,"")).toFixed(2);
    // const stringNew = Number(input.replace(/[^0-9.]+/g,""));
    // var number =   Number(currency.replace(/[^0-9.-]+/g,""));
}