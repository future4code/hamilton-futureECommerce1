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
    mostrarCarrinho: true,
    inputValorMinimo: "",
    inputValorMaximo: "",
    inputProduto: "",
  };

  mostrarEsconderCarrinho = () => {
    this.setState({
      mostrarCarrinho: !this.state.mostrarCarrinho
    });
  };

 onChangeInputValorMinimo = (event) =>{
  this.setState({inputValorMinimo: event.target.value});
  console.log(event.target.value);

};

onChangeInputValorMaximo = (event) =>{
  this.setState({inputValorMaximo: event.target.value});
};

onChangeBuscarProduto = (event) =>{
  this.setState({inputProduto: event.target.value});

};


  render() {
    console.log(this.onChangeInputValorMinimo)
    const inputValorMaximo = this.state.inputValorMaximo === "" ? Infinity: this.state.inputValorMaximo
    const listaFiltrada = list.filter(
      element =>
        element.preco <= inputValorMaximo &&
        element.preco >= this.state.inputValorMinimo &&
        element.nome.toUpperCase().search(nomeBusca.toUpperCase()) !== -1
    );

    return (
      <Container>
        <Filtro 
        escreveValorMinino = {this.onChangeInputValorMinimo}
        digitadoValorMinimo = {this.state.inputValorMinimo}
        escreveValorMaximo = {this.onChangeInputValorMaximo}
        digitadoValorMaximo = {this.state.inputValorMaximo}
        onChangeBuscarProduto = {this.state.onChangeBuscarProduto}
        buscarProduto = {this.state.buscarProduto}
        />
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
