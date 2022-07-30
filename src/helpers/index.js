export const formatQuantity = (quantity) =>{
    return Number(quantity).toLocaleString('en-US'),
    {
        style:'currency',
        currency:'USD'
    }
}