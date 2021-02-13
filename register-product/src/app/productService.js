
const PRODUCTS = '_PRODUCTS'

export function ErrorValidation(error){
    this.errors = error
}

export default class ProductService {

    validateField = (product) => {
        const errors = []

        if(!product.productName){
            errors.push('O campo Nome do Produto é obrigatório.')
        }

        if(!product.sku){
            errors.push('O campo SKU é obrigatório.')
        }

        if(!product.description){
            errors.push('O campo Descrição é obrigatório.')
        }

        if(!product.price || product.provider <= 0){
            errors.push('O campo Preço deve ter um valor maior que zero.')
        }

        if(!product.provider){
            errors.push('O campo Fornecedor é obrigatório.')
        }

        if(errors.length > 0){
            throw new ErrorValidation(errors)
        }
    }
    
    save = (product) => {
        this.validateField(product)

        let products = localStorage.getItem(PRODUCTS)
        
        if(!products){
            products = []
        }else{
            products = JSON.parse(products)
        }

        products.push(product)

        localStorage.setItem(PRODUCTS, JSON.stringify(products))
    }        

}