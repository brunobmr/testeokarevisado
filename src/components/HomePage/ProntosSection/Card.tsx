import React from "react";
import styled from "styled-components";

const S_Card = styled.div`
  font-size: 1rem;
  width: 42.227em;
  height: 42.227em;
  background: linear-gradient(transparent, black),
    url(https://img.freepik.com/free-psd/simple-product-backdrop-mockup-psd-with-shadow_53876-141762.jpg)
      center no-repeat;
  background-size: cover;
  border-radius: 2.7em;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  h3 {
    font-family: 'Open Sans', sans-serif;

    font-weight: 400;
    color: var(--white);
    padding: 3.2em 1em;
    span {
      font-size: 3.2em;
    }
  }

  @media screen and (min-width: 2100px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 2900px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 3300px) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: 3400px) {
    font-size: 1.9rem;
  }
  @media screen and (min-width: 3800px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 1750px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1550px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
    width: 12.0077em;
    height: 12.0077em;
    border-radius: 0.7678em;
    h3{
      padding: 0.91em 0.2844em;
      span{
        font-size: 1.2em;
      }
    }
  }
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 570px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export default function Card({ number }: { number: number }) {
  return (
    <S_Card>
      <h3>
        <span>Categoria {number}</span>
      </h3>
    </S_Card>
  );
}
