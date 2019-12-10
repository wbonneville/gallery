import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex-direction: row;
  & .image {
    height: 100%;
    width: 100%;
  }
`;

const Styles = styled.div`
  background-color: #f7f8fa;
  margin-left: 4%;
  margin-right: 4%;

  & .imageSpace {
    padding: 5px;
  }
`;

const Div = styled.div``;

const Gallery = ({ initialData, initialDataSetTwo, initialDataSetThree }) => {
  const [data, setData] = useState(initialData);
  const [dataTwo, setDataTwo] = useState(initialDataSetTwo);
  const [dataThree, setDataThree] = useState(initialDataSetThree);

  return (
    <Wrapper>
      <Styles className="row">
        <Div className="col-xs-4">
          {data.map(item => (
            <div className="row imageSpace">
              <img
                className="image"
                key={item.sys.id}
                alt="fall"
                src={item.fields.image.file.url}
              />
            </div>
          ))}
        </Div>
        <Div className="col-xs-4">
          {dataTwo.map(item => (
            <div className="row imageSpace">
              <img
                className="image"
                key={item.sys.id}
                alt="fall"
                src={item.fields.image.file.url}
              />
            </div>
          ))}
        </Div>
        <Div className="col-xs-4">
          {dataThree.map(item => (
            <div className="row imageSpace">
              <img
                className="image"
                key={item.sys.id}
                alt="fall"
                src={item.fields.image.file.url}
              />
            </div>
          ))}
        </Div>
      </Styles>
    </Wrapper>
  );
};

export default Gallery;
