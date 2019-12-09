import React from "react";
import styled from "styled-components";
import { data } from "./data";

const Styles = styled.div`
  flex-direction: row;
  margin-left: 3%;
  margin-right: 3%;
`;

const Div = styled.div`
  margin-top: 12px;
  & img {
    width: 100%;
  }
`;

const Gallery = () => {
  return (
    <Styles className="row">
      {data.map(item => (
        <Div className="col-xs-3">
          <img key={item.sys.id} alt="fall" src={item.fields.image.file.url} />
        </Div>
      ))}
    </Styles>
  );
};

export default Gallery;
