import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Styles, Div, MyImageDiv } from "./Styles.js";

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
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  const [ref, hovered] = useHover();
  return (
    <MyImageDiv ref={ref} className="row imageSpace">
      {hovered && (
        <div className="name">
          <h1>
            {header} <span className="likespan">{likes}</span>{" "}
            <i onClick={() => addLike()} class="likeicon far fa-heart"></i>
          </h1>{" "}
        </div>
      )}
      <img className="image" alt="fall" src={src} />
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
              key={item.id}
              src={item.fields.image.file.url}
              header={item.fields.name}
            />
          ))}
        </Div>
        <Div className="col-xs-4">
          {dataTwo.map(item => (
            <MyImage
              key={item.id}
              src={item.fields.image.file.url}
              header={item.fields.name}
            />
          ))}
        </Div>
        <Div className="col-xs-4">
          {dataThree.map(item => (
            <MyImage
              key={item.id}
              src={item.fields.image.file.url}
              header={item.fields.name}
            />
          ))}
        </Div>
      </Styles>
    </Wrapper>
  );
};

export default Gallery;
