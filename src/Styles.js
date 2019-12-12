import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: row;
  & .image {
    height: 100%;
    width: 100%;
  }
`;

export const Styles = styled.div`
  background-color: #f7f8fa;
  margin-left: 4%;
  margin-right: 4%;

  & .imageSpace {
    padding: 5px;
  }
`;

export const Div = styled.div``;

export const MyImageDiv = styled.div`
  position: relative;
  font-size: 12px;
  & .likes {
    display: flex;
  }

  & .span {
    position: absolute;
    left: 310px;
    margin-right: 8%;
  }

  & .icon {
    position: absolute;
    left: 340px;
    font-size: 14px;
  }

  & .icon:hover {
    color: red;
  }

  & .name {
    display: flex;
    color: white;
    position: absolute;

    opacity: 0.9;
    font-weight: 100;
    margin-left: 3%;
    bottom: 0.8%;
    animation: text 0.2s;
    /* background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 90%
    ); */

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

export const Info = styled.div`
  & h2 {
    color: #0099e5;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    display: inline-block;
    margin: 2%;
  }
`;

// const StyledH1 = styled.h1`
//   color: red;
//   z-index: 1;
//   position: absolute;
//   bottom: 20px;
// `;

// hover function
