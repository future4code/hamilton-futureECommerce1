import React, { Component } from "react";
import styled from "styled-components";
import ProdutoCarrinho from "./ProdutoCarrinho";

export default class Carrinho extends Component {
  render() {
    let total = 0;

    this.props.propsListaAdicionados.forEach(element => {
      total += element.quantidade * element.preco;
    });



    return (
      <Container>
        <h2>Carrinho:</h2>
        {this.props.propsListaAdicionados.map(element => (
          <ProdutoCarrinho
          ApagarDoCarrinho = {this.props.funcaoParaRemover}  
          propsNome={element.nome}
          propsQuantidade={element.quantidade}
          />
        ))}
        <p>Total: R${total},00</p>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px black solid;
  padding: 10px;
  margin: 10px;
`;
