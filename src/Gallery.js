import React, { useState, useEffect, useRef } from "react";
import { initialData, initialDataSetTwo, initialDataSetThree } from "./data";
import Info from "./Info";
import useModal from "use-react-modal";

// import styled components from styles

import { Wrapper, Styles, Div, MyImageDiv, ModalImage } from "./Styles.js";

const useHover = () => {
  const ref = useRef();
  // hover hook
  const [hovered, setHovered] = useState(false);

  // set the state of hovered
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
  const { isOpen, openModal, closeModal, Modal } = useModal({
    background: "rgba(0, 0, 0, 0.9)"
  });
  const [likes, setLikes] = useState(0);
  const [ref, hovered] = useHover();

  // set likes = likes + 1
  const addLike = () => {
    setLikes(likes + 1);
    // add like limit
    if (likes === 1) {
      setLikes(likes);
    }
  };

  return (
    <MyImageDiv ref={ref} className="row imageSpace selector">
      {hovered && (
        <div className="name">
          <h1 className="header">{header}</h1>
          <h1 className="likes">
            <span className="span">{likes}</span>{" "}
            <i onClick={() => addLike()} className="icon fas fa-heart"></i>{" "}
          </h1>
        </div>
      )}
      {isOpen && (
        <Modal>
          <div className="row middle-xs">
            <div className="col-xs-4">
              <ModalImage alt="modal" src={src}></ModalImage>
            </div>
          </div>
        </Modal>
      )}
      <img onClick={openModal} className="image" alt="fall" src={src} />
    </MyImageDiv>
  );
};

const Gallery = () => {
  const [data, setData] = useState(initialData);
  const [dataTwo, setDataTwo] = useState(initialDataSetTwo);
  const [dataThree, setDataThree] = useState(initialDataSetThree);

  const allCount = () => {
    let dataCountOne = 0;
    let dataCountTwo = 0;
    let dataCountThree = 0;

    data.map(item => {
      dataCountOne += 1;
    });

    dataTwo.map(item => {
      dataCountTwo += 1;
    });

    dataThree.map(item => {
      dataCountThree += 1;
    });

    let total = dataCountOne + dataCountTwo + dataCountThree;
    return total;
  };

  return (
    <Wrapper>
      <Info allCount={allCount()} />

      <Styles className="row">
        <Div className="col-xs-4">
          {data.map((item, index) => (
            <MyImage
              index={index}
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
