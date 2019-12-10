import React, { useState, useEffect, useRef } from "react";
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

const MyImageDiv = styled.div`
  position: relative;

  & .name {
    color: white;
    position: absolute;
    font-size: 18px;
    font-weight: 100;
    margin-left: 3%;
    bottom: 2%;
    animation: text 0.1s;

    @keyframes text {
      from {
        transform: translateY(100%);
      }

      to {
        transform: translateY(0%);
      }
    }
  }
`;

// const StyledH1 = styled.h1`
//   color: red;
//   z-index: 1;
//   position: absolute;
//   bottom: 20px;
// `;

// hover function

const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
};

// image component

const MyImage = ({ src, header }) => {
  const [ref, hovered] = useHover();
  return (
    <MyImageDiv className="row imageSpace">
      {hovered && (
        <div className="name">
          <h1>{header}</h1>{" "}
        </div>
      )}
      <img ref={ref} className="image" alt="fall" src={src} />
    </MyImageDiv>
  );
};

const Gallery = ({ initialData, initialDataSetTwo, initialDataSetThree }) => {
  const [data, setData] = useState(initialData);
  const [dataTwo, setDataTwo] = useState(initialDataSetTwo);
  const [dataThree, setDataThree] = useState(initialDataSetThree);

  return (
    <Wrapper>
      <Styles className="row">
        <Div className="col-xs-4">
          {data.map(item => (
            <MyImage
              key={item.sys.id}
              src={item.fields.image.file.url}
              header={item.fields.name}
            />
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
                header={item.fields.name}
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
