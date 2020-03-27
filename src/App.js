import React from "react";
import Filtro from "./Components/Filtro";
import Catalogo from "./Components/Catalogo";
import Carrinho from "./Components/Carrinho";
import styled, { css } from "styled-components";
import Produtos from "./Produtos";
import Terra from "./Img/terra.jpg";

const valorMinino = 0;
const valorMaximo = Infinity;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.headerRef = React.createRef();
    this.scrollTreshold = 0;

    this.state = {
      listaAdicionados: [],
      mostrarCarrinho: false,
      stickyHeader: false,
      valorMinino: 0,
      valorMaximo: 0,
      nomeBusca: ""
    };
  }

  onChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    this.scrollTreshold = this.headerRef.current.offsetTop;
    window.onscroll = this.stickyHeader;
  }

  componentDidUpdate() {
    document.body.style.overflowY = this.state.mostrarCarrinho
      ? "hidden"
      : "scroll";
  }

  stickyHeader = () => {
    this.setState({
      stickyHeader: window.pageYOffset > this.scrollTreshold
    });
  };

  adicionaAoCarrinho = produtoAdicionado => {
    let novaListaAdicionados = [...this.state.listaAdicionados];
    const objeto = this.state.listaAdicionados.find(
      elemento => elemento.nome === produtoAdicionado.nome
    );

    if (!objeto) novaListaAdicionados.push(produtoAdicionado);
    else objeto.quantidade++;

    this.setState({
      listaAdicionados: novaListaAdicionados
    });
  };

  removerItemCarrinho = nomeProdutoParaRemover => {
    let novaLista = this.state.listaAdicionados.filter(produto => {
      return produto.nome !== nomeProdutoParaRemover;
    });

    this.setState({
      listaAdicionados: novaLista
    });
  };

  mostrarEsconderCarrinho = () => {
    this.setState({
      mostrarCarrinho: !this.state.mostrarCarrinho
    });
  };

  render() {
    const listaFiltrada = Produtos.lista.filter(
      element =>
        element.preco <= valorMaximo &&
        element.preco >= valorMinino &&
        element.nome
          .toUpperCase()
          .search(this.state.nomeBusca.toUpperCase()) !== -1
    );

    return (
      <Container>
        <Header img={Terra}></Header>
        <Filtro
          valorMaximo={this.state.valorMaximo}
          valorMinino={this.state.valorMinino}
          nomeBusca={this.state.nomeBusca}
          onChangeInput={this.onChangeInput}
          openCart={this.mostrarEsconderCarrinho}
          ref={this.headerRef}
          sticky={this.state.stickyHeader}
          carrinhoTotal={this.state.listaAdicionados.length}
        />
        <Catalogo
          sticky={this.state.stickyHeader}
          propsFuncaoAdicionar={this.adicionaAoCarrinho}
          propsListaDeProdutos={listaFiltrada}
        />
        <Carrinho
          show={this.state.mostrarCarrinho}
          closeCart={this.mostrarEsconderCarrinho}
          propsListaAdicionados={this.state.listaAdicionados}
          funcaoParaRemover={this.removerItemCarrinho}
        />
        {/* <CartButton onClick={this.mostrarEsconderCarrinho}>Carrinho</CartButton> */}
      </Container>
    );
  }
}

const CartButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const Header = styled.div`
  position: absolute;
  flex: none;
  height: 370px;
  width: 100%;
  background-image: url(${props => props.img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default App;
