import React, { useState } from "react";
import styled from "styled-components";

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

const DivTwo = styled.div`
  margin-top: 12px;

  & img {
    width: 100%;
  }
`;

const Gallery = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  return (
    <Styles className="row">
      {data.map(item => (
        <>
          {item.fields.vertical === true && (
            <Div className="col-xs-4">
              <img
                key={item.sys.id}
                alt="fall"
                src={item.fields.image.file.url}
              />
            </Div>
          )}
          {item.fields.horizontal === true && (
            <DivTwo className="col-xs-12">
              <img
                key={item.sys.id}
                alt="fall"
                src={item.fields.image.file.url}
              />
            </DivTwo>
          )}
        </>
      ))}
    </Styles>
  );
};

export default Gallery;
