import styled from "styled-components";

const Panell = styled.ul`
  width: fit-content;
  margin: 0.75rem 0 1.95rem 1.5rem;
  font-size: 1rem;
  border: 2px solid redadd -;
  border-radius: 8px;
`;

const DataContainer = styled.div`
  width: fit-content;
  font-size: 1rem;
  border: solid 2px orange;
  border-radius: 8px;
  padding: 2rem;
`;

const DivContainer = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  padding: 2rem;
  margin-right: 3rem;
  border: 2px solid orange;
  border-radius: 8px;
`;

const DivHomeContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 35%;
  display: flex;
  flex-direction: column;
  alignitems: "center";
  border: 2px solid orange;
  height: fit-content;
  width: fit-content;
  border-radius: 8px;
  padding: 2rem;
`;

export { Panell, DataContainer, Form, DivContainer, DivHomeContainer };
