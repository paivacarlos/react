import React from 'react'

import ProductService from '../../app/productService'

const initState = {
    productName:'',
    sku:'',
    description:'',
    price: 0,
    provider:'',
    showSuccessMesage: false   
}

export default class ProductRegister extends React.Component {

    constructor(){
        super()
        this.service = new ProductService()
    }

    state = initState

    onChange = (event) => {
        const value = event.target.value
        const fieldName = event.target.name
        this.setState({ [fieldName]: value})
    }

    onSubmit = (event) => {
        const product = {
            productName: this.state.productName,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            provider: this.state.provider
        }
        this.service.save(product)
        this.cleanFields()
        this.setState({showSuccessMesage: true})
    }

    cleanFields = () => {
        this.setState(initState)
    }

	render(){
		return(
			<div className="card">

				<div className="card-header">
					Cadstro de Produto
				</div>

				<div className="card-body">

                    {//renderização condicional
                        this.state.showSuccessMesage &&
                            <div className="alert alert-dismissible alert-success">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Processo realizado!</strong> Produto cadastrado com sucesso!
                            </div>
                        
                    }

					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label>Nome do Produto: *</label>
								<input type="text" 
                                       name="productName" 
                                       value={this.state.productName}
                                       onChange={this.onChange} 
                                       className="form-control"/>
							</div>
						</div>

						<div className="col-md-6">
							<div className="form-group">
									<label>SKU: *</label>
									<input type="text" 
                                           name="sku" 
                                           value={this.state.sku}
                                           onChange={this.onChange} 
                                           className="form-control"/>
							</div>	
					    </div>
				    </div>

					<div className="row">
						<div className="col-md-12">
							<div className="form-group">
								<label>Descrição: *</label>
								<textarea name="description" 
                                          value={this.state.description} 
                                          onChange={this.onChange}
                                          className="form-control"/>
							</div>
						</div>
				    </div>                    

					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label>Preço: *</label>
								<input name="price" 
                                       type="text" 
                                       value={this.state.price}
                                       onChange={this.onChange} 
                                       className="form-control"/>
							</div>
						</div>

						<div className="col-md-6">
							<div className="form-group">
									<label>Fornecedor: *</label>
									<input name="provider" 
                                           type="text" 
                                           value={this.state.provider} 
                                           onChange={this.onChange}
                                           className="form-control"/>
							</div>	
					    </div>
				    </div> 

                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>

                        <div className="col-md-1">
                            <button onClick={this.cleanFields} className="btn btn-primary">Limpar</button>
                        </div>
                    </div>                   

			    </div>
                
		    </div>
	)
  }
}