import React from 'react'

import ProductService from '../app/productService'

export default class ProductsSearch extends React.Component{

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

    render(){
        return(

            <div className="card">

                <div className="card-header">
                    Consulta de produto
                </div>
        
                <div className="card-body">
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
                                            <th></th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    
                </div>
            </div>  
        )
    }

}