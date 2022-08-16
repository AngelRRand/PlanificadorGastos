export const formatQuantity = (quantity) =>{
    return Number(quantity).toLocaleString('en-US'),
    {
        style:'currency',
        currency:'USD'
    }
}

export const generatoID = ()=>{
    const random = Math.ramdom().toString(36).substring(2, 11)
    const day = Date.now().toString(36)

    return random + day
}