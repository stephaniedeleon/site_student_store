const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export const formatAmount = (amount) => {
    const dollars = amount;
    return `$${formatter.format(dollars)}`;
}