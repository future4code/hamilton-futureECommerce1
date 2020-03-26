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
  render() {
    return (
      <Container>
        <h2> Filtros:</h2>
        <label>Valor Mínimo</label>
        <input type="number" />
        <label>Valor Máximo</label>
        <input type="number" />
        <label>Buscar Produto</label>
        <input type="text" />
      </Container>
    );
  }
}
