import React from "react";
import Filtro from "./Components/Filtro";
import Catalogo from "./Components/Catalogo";
import Carrinho from "./Components/Carrinho";
import styled, { css } from "styled-components";
import Produtos from "./Produtos";
import Terra from "./Img/terra.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.headerRef = React.createRef();
    this.scrollTreshold = 0;

    this.state = {
      listaAdicionados: [],
      mostrarCarrinho: false,
      stickyHeader: false,
      valorMinino: "",
      valorMaximo: "",
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

    const cart = localStorage.getItem("carrinho");

    if (cart)
      this.setState({
        listaAdicionados: JSON.parse(cart)
      });
  }

  componentDidUpdate() {
    document.body.style.overflowY = this.state.mostrarCarrinho
      ? "hidden"
      : "scroll";

    localStorage.setItem(
      "carrinho",
      JSON.stringify(this.state.listaAdicionados)
    );
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
    const valorMinino = Number(this.state.valorMinino);
    const valorMaximo =
      this.state.valorMaximo != "" ? Number(this.state.valorMaximo) : Infinity;

    const listaFiltrada = Produtos.lista.filter(
      element =>
        element.preco <= valorMaximo &&
        element.preco >= valorMinino &&
        element.nome
          .toUpperCase()
          .search(this.state.nomeBusca.toUpperCase()) !== -1
    );

    let valorTotal = 0;
    let viagensTotal = 0;

    this.state.listaAdicionados.forEach(element => {
      valorTotal += element.quantidade * element.preco;
      viagensTotal += element.quantidade;
    });

    return (
      <Container>
        <Background img={Terra}></Background>
        <Filtro
          valorMaximo={this.state.valorMaximo}
          valorMinino={this.state.valorMinino}
          nomeBusca={this.state.nomeBusca}
          onChangeInput={this.onChangeInput}
          openCart={this.mostrarEsconderCarrinho}
          ref={this.headerRef}
          sticky={this.state.stickyHeader}
          carrinhoTotal={viagensTotal}
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
          valorTotal={valorTotal}
          viagensTotal={viagensTotal}
        />
      </Container>
    );
  }
}

const Background = styled.div`
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
