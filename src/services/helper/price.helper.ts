// one place to change the currency symbol of the whole app
export const formatPrice = (amount: number) => {
    return "$" + amount.toFixed(2)
}