import React, { Component } from "react";
import Produto from "./Produto";
import styled, { css } from "styled-components";
import { isElementOfType } from "react-dom/test-utils";

export default class Catalogo extends Component {
  state = {
    crescente: "true"
  };

  mudarSeletor = event => {
    this.setState({
      crescente: event.target.value
    });
  };

  render() {
    const listaCrescente = this.props.propsListaDeProdutos.sort(
      (a, b) => a.preco - b.preco
    );

    if (this.state.crescente === "false") listaCrescente.reverse();
    return (
      <Container sticky={this.props.sticky}>
        <Header>
          <p>Quantidade de Produtos: {listaCrescente.length}</p>
          <select value={this.state.crescente} onChange={this.mudarSeletor}>
            <option value="true">Preço: Crescente</option>
            <option value="false">Preço: Decrescente</option>
          </select>
        </Header>
        <ListaDeProdutos>
          {listaCrescente.map(element => (
            <Produto
              adicionaAoCarrinho={this.props.propsFuncaoAdicionar}
              propsNome={element.nome}
              propsPreco={element.preco}
              propsImagem={element.img}
              key={element.id}
            />
          ))}
        </ListaDeProdutos>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100%;
  flex: 1;

  box-shadow: inset 0 0 10px #000000;

  ${props =>
    props.sticky &&
    css`
      padding-top: 370px;
    `}
`;
const Header = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 90%;
`;

const ListaDeProdutos = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;
