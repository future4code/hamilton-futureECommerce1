import React, { Component } from "react";
import Produto from "./Produto";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
  margin: 10px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ListaDeProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;

let crescente = false;

export default class Catalogo extends Component {


  render() {
    const listaCrescente = this.props.propsListaDeProdutos.sort(
      (a, b) => a.preco - b.preco
    );

    if (!crescente) listaCrescente.reverse();

    return (
      <Container>
        <Header>
          <p>Quantidade de Produtos: {listaCrescente.length}</p>
          <select>
            <option>Preço: Crescente</option>
            <option>Preço: Decrescente</option>
          </select>
        </Header>
        <ListaDeProdutos>
          {listaCrescente.map(element => (
            <Produto 
            adicionaAoCarrinho={this.props.propsFuncaoAdicionar}
            propsViagem={element.nome, element.preco, element.quantidade} 
            propsNome={element.nome} 
            propsPreco={element.preco} />
          ))}
        </ListaDeProdutos>
      </Container>
    );
  }
}
