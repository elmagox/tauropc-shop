export const currencyFormatter = (number) =>{
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(number)
}
