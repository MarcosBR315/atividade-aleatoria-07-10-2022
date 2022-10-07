import React from "react";
import * as S from "./style/Style";
import {GlobalStyle} from "./style/Style";

export default function Home(){
  return(
    <>
    <GlobalStyle />
      <S.Header>
        <h1>Scale</h1>
        <S.Ul>
          <S.Li>Login</S.Li>
          <S.Li>Cadastro</S.Li>
        </S.Ul>
      </S.Header>
    </>
  )
}