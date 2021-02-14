import React from 'react'

import Card from '../../components/card'
import ProductService from '../../app/productService'
import { withRouter } from 'react-router-dom'

const initState = {
    productName:'',
    sku:'',
    description:'',
    price: 0,
    provider:'',
    showSuccessMesage: false,
    showErrorMesage: [],
    update: false  
}

class ProductRegister extends React.Component {

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
        event.preventDefault()//ele desabilita enviar o como form e sim como react
        const product = {
            productName: this.state.productName,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            provider: this.state.provider
        }        
        try {
            this.service.save(product)
            this.cleanFields()
            this.setState({showSuccessMesage: true})
        } catch (error) {
            const errorMsg = error.errors
            this.setState({showErrorMesage: errorMsg})
        }
    }

    cleanFields = () => {
        this.setState(initState)
    }

    componentDidMount() {
        const sku = this.props.match.params.sku

        if(sku){
            const result = this.service.getProduct().filter(product => product.sku === sku)
            if(result.length === 1){
                const productFound = result[0]
                this.setState({ ...productFound, update: true })
            }
        }
    }

	render(){
		return(
			<Card header={this.state.update ? 'Atualização de produto' : 'Cadastro de produto'}>

                    <form id="frmProduct" onSubmit={this.onSubmit}>

                        {//renderização condicional
                        this.state.showSuccessMesage &&
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Processo realizado!</strong> Produto cadastrado com sucesso!
                                </div>                        
                        }

                        {//renderização condicional
                            this.state.showErrorMesage.length > 0 &&
                            
                            this.state.showErrorMesage.map(msg => {
                                return(
                                    <div className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>Ocorreu algum imprevisto!</strong> {msg}
                                    </div> 
                                )
                            })
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
                                            disabled={this.state.update}
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
                                <button type="submit" className="btn btn-success">
                                    {this.state.update ? 'Atualizar' : 'Salvar'}
                                </button>
                            </div>

                            <div className="col-md-1">
                                <button onClick={this.cleanFields} className="btn btn-primary">Limpar</button>
                            </div>
                        </div>                 

                    </form>                
		    </Card>
	)
  }
}

export default withRouter(ProductRegister)