import React from 'react'

import Card from '../components/card'
import ProductsTable from '../views/products/productsTable'
import ProductService from '../app/productService'
import { withRouter } from 'react-router-dom'

class ProductsSearch extends React.Component{

    constructor(){
        super()
        this.service = new ProductService()
    }

    state = {
        products: []
    }  
    
    componentDidMount(){
        const products = this.service.getProduct()
        this.setState({ products })
    }

    prepareEdition = (sku) => {
        this.props.history.push(`/products-register/${sku}`)        
    }

    deleteProduct = (sku) => {
        const products = this.service.delete(sku)
        this.setState({products})
    }

    render(){
        return(

            <Card header="Consult Products">
                <ProductsTable products={this.state.products} 
                               editAction={this.prepareEdition}
                               deleteAction={this.deleteProduct} />

            </Card>  
        )
    }
}

export default withRouter(ProductsSearch)