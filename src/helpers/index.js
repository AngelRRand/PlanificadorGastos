export const formatQuantity = (quantity) =>{
    return Number(quantity).toLocaleString('en-US'),
    {
        style:'currency',
        currency:'USD'
    }
}
export const formatDay = day =>{
    const dayNew = new Date(day)
    const option = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    }
    return dayNew.toLocaleString('es-ES', option)
}
export const generatoID = ()=>{
    const random = Math.ramdom().toString(36).substring(2, 11)
    const day = Date.now().toString(36)

    return random + day
}