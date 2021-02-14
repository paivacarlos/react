import React from 'react'

import Card from '../components/card'
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

            <Card header="Product Consult">
                    <table className="table table-hover">

                        <thead>
                            <tr>
                                <th>Nome do Produto</th>
                                <th>SKU</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.products.map((product, index)=> {
                                    return(
                                        <tr key={index}>
                                            <th>{product.productName}</th>
                                            <th>{product.sku}</th>
                                            <th>{product.price}</th>
                                            <th>{product.provider}</th>
                                            <th>
                                                <button onClick={() => this.prepareEdition(product.sku)} className="btn btn-primary">Editar</button>
                                                <button onClick={() => this.deleteProduct(product.sku)} className="btn btn-danger">Remover</button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </Card>  
        )
    }
}

export default withRouter(ProductsSearch)