import React, { Component } from "react";
import styled, { css } from "styled-components";
import cartIcon from "../Img/deliver.png";

class Filtro extends Component {
  render() {
    console.log(this.props.valorMinino);
    return (
      <Header ref={this.props.innerRef} sticky={this.props.sticky}>
        <InputWrapper>
          <Input
            value={this.props.nomeBusca}
            name="nomeBusca"
            placeholder="Busca"
            onChange={this.props.onChangeInput}
          />
          R$
          <NumInput
            value={this.props.valorMinino}
            name="valorMinino"
            placeholder="min"
            onChange={this.props.onChangeInput}
          />
          ~
          <NumInput
            value={this.props.valorMaximo}
            name="valorMaximo"
            placeholder="Max"
            onChange={this.props.onChangeInput}
          />
        </InputWrapper>
        <ShopButton onClick={this.props.openCart}>
          <Img src={cartIcon} />
          <CartPopUp amount={this.props.carrinhoTotal}>
            {this.props.carrinhoTotal}
          </CartPopUp>
        </ShopButton>
      </Header>
    );
  }
}

const CartPopUp = styled.div`
  position: absolute;
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  top: -5px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  transform: scale(0, 0);
  transition: 0.3s ease-out;

  ${props =>
    props.amount > 0 &&
    css`
      transform: scale(1, 1);
    `};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ShopButton = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: white;
  height: 40px;
  width: 40px;
  padding: 5px 5px 0px 2px;
  border-radius: 5px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Input = styled.input`
  height: 30%;
  margin-right: 20px;
  padding: 0 5px;
  border: none;
  border-radius: 5px;
`;

const NumInput = styled(Input)`
  width: 40px;
  margin: 5px;
`;

const Header = styled.header`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  box-sizing: border-box;
  flex: none;
  margin-top: 300px;
  padding: 0 30px;
  transition: background-color 0.5;
  background-color: rgba(0, 0, 0, 0.6);

  ${props =>
    props.sticky &&
    css`
      margin-top: 0;
      position: fixed;
      top: 0;
      left: 0;
      background-color: black;
      z-index: 1;
    `};
`;

export default React.forwardRef((props, ref) => (
  <Filtro innerRef={ref} {...props} />
));
