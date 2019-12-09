import React from "react";
import styled from "styled-components";
import { data } from "./data";

const Styles = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 20%;
`;

const Gallery = () => {
  return (
    <Styles>
      {data.map(item => (
        <div key={item.sys.id}>
          <Img alt="fall" src={item.fields.image.file.url} />
        </div>
      ))}
    </Styles>
  );
};

export default Gallery;
