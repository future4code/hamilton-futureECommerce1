import React, { Component } from "react";
import styled from "styled-components";




const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid black;
  margin: 10px;
`;


export default class Filtro extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }

  }
  
  render() {
    console.log(this.props.escreveValorMinimo)
    return (
      <Container>
        <h2> Filtros:</h2>
        
        <label>Valor Mínimo</label>
        <input value={this.props.digitadoValorMinimo} 
        onChange={this.props.escreveValorMinino} type="number" />
        <label>Valor Máximo</label>
        <input value={this.props.digitadoValorMaximo} 
        onChange={this.props.escreveValorMaximo} type="number" />
        <label>Buscar Produto</label>
        <input value={this.props.buscarProduto} 
        onChange={this.props.onChangeBuscarProduto} type="text" />
      </Container>
    );
  }
}


