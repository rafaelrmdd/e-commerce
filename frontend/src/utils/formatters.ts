export const usDolarFormatter = (value : number | undefined) => {
    if (value === undefined){
        return 0;
    }

    const usdFormat = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const formattedValue = usdFormat.format(value);

    return formattedValue;
}; 