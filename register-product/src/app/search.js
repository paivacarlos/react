import React from 'react'

export default class ProductsSearch extends React.Component{

    state = {
        products: []
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
                                this.state.products.map(product => {
                                    return(
                                        <tr>
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