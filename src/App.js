import React from "react";
import Filtro from "./Components/Filtro";
import Catalogo from "./Components/Catalogo";
import Carrinho from "./Components/Carrinho";
import styled from "styled-components";

const list = [
  {
    nome: "Mecúrio",
    preco: 90
  },
  {
    nome: "Marte",
    preco: 70
  },
  {
    nome: "Marte",
    preco: 70
  }
];

const listaAdicionados = [
  {
    nome: "Marte",
    preco: 70,
    quantidade: 1
  }
];

const valorMinino = 0;
const valorMaximo = Infinity;
const nomeBusca = "";

class App extends React.Component {
  state = {
    mostrarCarrinho: true
  };

  mostrarEsconderCarrinho = () => {
    this.setState({
      mostrarCarrinho: !this.state.mostrarCarrinho
    });
  };

  render() {
    const listaFiltrada = list.filter(
      element =>
        element.preco <= valorMaximo &&
        element.preco >= valorMinino &&
        element.nome.toUpperCase().search(nomeBusca.toUpperCase()) !== -1
    );

    return (
      <Container>
        <Filtro />
        <Catalogo propsListaDeProdutos={listaFiltrada} />
        {this.state.mostrarCarrinho && (
          <Carrinho propsListaAdicionados={listaAdicionados} />
        )}
        <CartButton onClick={this.mostrarEsconderCarrinho}>Carrinho</CartButton>
      </Container>
    );
  }
}

const CartButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 70vh;

  display: flex;
  justify-content: space-between;
`;

export default App;
