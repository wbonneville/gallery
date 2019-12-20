import React, { useState, useEffect, useRef } from "react";
import { initialData, initialDataSetTwo, initialDataSetThree } from "./data";
import Info from "./Info";
import useModal from "use-react-modal";
import allCount from "./count";

// import styled components from styles
import { Wrapper, Styles, Div, MyImageDiv, ModalImage } from "./Styles.js";

// useHover function
const useHover = () => {
  const ref = useRef();
  // hover hook
  const [hovered, setHovered] = useState(false);

  // set the state of hovered to true or false
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    // run when use hovers or leaves
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
};

// image component takes src and header as props
const MyImage = ({ src, header }) => {
  // destructure to get props out of useModal
  const { isOpen, openModal, closeModal, Modal } = useModal({
    background: "rgba(0, 0, 0, 0.9)"
  });
  // hook for likes
  const [likes, setLikes] = useState(0);
  // ref hook for hovering
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
    // each image div recieves a new ref
    <MyImageDiv ref={ref} className="row imageSpace selector">
      {/* conditional rendering: if hovered is true display name div */}
      {hovered && (
        <div className="name">
          <h1 className="header">{header}</h1>
          <h1 className="likes">
            <span className="span">{likes}</span>{" "}
            {/* on click, run addLike function */}
            <i onClick={() => addLike()} className="icon fas fa-heart"></i>{" "}
          </h1>
        </div>
      )}
      {/* if modal is open (isOpen = true), display the ModalImage component */}
      {isOpen && (
        <Modal>
          <div className="row middle-xs">
            <div className="col-xs-4">
              <ModalImage alt="modal" src={src}></ModalImage>
            </div>
          </div>
        </Modal>
      )}
      {/* isOpen is set to true if img is clicked */}
      <img onClick={openModal} className="image" alt="fall" src={src} />
    </MyImageDiv>
  );
};

const Gallery = () => {
  // hooks for data sets and count
  // hooks aren't necessary, but good practice
  const [data, setData] = useState(initialData);
  const [dataTwo, setDataTwo] = useState(initialDataSetTwo);
  const [dataThree, setDataThree] = useState(initialDataSetThree);
  const [count, setCount] = useState(allCount());

  return (
    <Wrapper>
      {/* display count */}
      <Info allCount={count} />

      <Styles className="row">
        <Div className="col-xs-4">
          {/* map through data and render MyImage components */}
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
