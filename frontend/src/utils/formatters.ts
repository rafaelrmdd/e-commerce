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

export const utcDateFormatter = (date: Date) => {
    if (date === undefined){
        return 0;
    }

    const utcFormat = Intl.DateTimeFormat("en-US");

    const formattedDate = utcFormat.format(date);

    return formattedDate;
}