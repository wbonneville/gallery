import React from "react";
import styled from "styled-components";
import { data } from "./data";

const Styles = styled.div`
  display: flex;
`;

const Gallery = () => {
  return (
    <Styles>
      {data.map(item => (
        <div key={item.sys.id}>{item.fields.name}</div>
      ))}
    </Styles>
  );
};

export default Gallery;
