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

const valorMinino = 0;
const valorMaximo = Infinity;
const nomeBusca = "";

class App extends React.Component {
  constructor(props){
    super(props)
  
  this.state = {

    listaAdicionados:[ 
    {
      nome: "Marte",
      preco: 70,
      quantidade: 1,
    }
  ],

    mostrarCarrinho: true,
   }

};

  adicionaAoCarrinho = (produtoAdicionado) => {
    let novaListaAdicionados
    const objeto = this.state.listaAdicionados.find(elemento => elemento.nome === produtoAdicionado.nome)

    if(!objeto) {
      novaListaAdicionados = [...this.state.listaAdicionados, produtoAdicionado]
    } else {
      novaListaAdicionados = [...this.state.listaAdicionados]
      objeto.quantidade++
    }
    

    this.setState({
      listaAdicionados: novaListaAdicionados
    })
  }


  removerItemCarrinho = (nomeProdutoParaRemover) => {

    let novaLista = this.state.listaAdicionados.filter( produto =>{

      return produto.nome !== nomeProdutoParaRemover
    })
  

   this.setState({
     listaAdicionados: novaLista
   })
  }


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
        <Catalogo propsFuncaoAdicionar={this.adicionaAoCarrinho} 
        propsListaDeProdutos={listaFiltrada} />
        {this.state.mostrarCarrinho && (
          <Carrinho 
          propsListaAdicionados={this.state.listaAdicionados} 
          funcaoParaRemover={this.removerItemCarrinho}
          />
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
