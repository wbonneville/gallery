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

const MyImage = ({ src, header, likes, addLike }) => {
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
  const initialLikes = 1;
  const [data, setData] = useState(initialData);
  const [dataTwo, setDataTwo] = useState(initialDataSetTwo);
  const [dataThree, setDataThree] = useState(initialDataSetThree);
  const [likes, setLikes] = useState(initialLikes);

  const addLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Wrapper>
      <Styles className="row">
        <Div className="col-xs-4">
          {data.map(item => (
            <MyImage
              key={item.sys.id}
              src={item.fields.image.file.url}
              header={item.fields.name}
              likes={likes}
              addLike={addLike}
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
