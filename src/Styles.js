import React from "react";
import styled from "styled-components";
import image from "./images/background.jpg";
import buddha from "./images/buddha.png";

export const ModalImage = styled.img`
  width: 500px;
`;

export const AboutWrapper = styled.div`
  & h2 {
    margin-top: 12%;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    color: red;
    text-transform: uppercase;
  }
  & p {
    text-align: left;
    padding-bottom: 6%;
  }
`;

export const Wrapper = styled.div`
  background-color: #f7f8fa;
  flex-direction: row;
  & .image {
    height: 100%;
    width: 100%;
  }
`;

export const Styles = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  padding-top: 1.5%;
  & .imageSpace {
    padding: 5px;
  }
`;

export const Div = styled.div``;

export const Hero = styled.div`
  background-color: gray;
  background-image: url(${image});
  height: 350px;
  background-size: cover;
  background-position: center bottom;
`;

export const Container = styled.div`
  /* top: 50% */
  top: 280px;
  position: absolute;
  margin-bottom: 10px;
`;

export const Avatar = styled.div`
  background-image: url(${buddha});
  border: 1px solid whitesmoke;

  border-radius: 50%;
  width: 115px;
  height: 115px;
  margin-top: 20px;
  background-size: cover;
  background-position: center;
`;

export const GalleryTitle = styled.div`
  margin-top: 7%;
  & h1 {
    color: gray;
    font-weight: 300;
    font-size: 35px;
  }

  & h4 {
    color: gray;
    font-weight: 200;
    font-size: 20px;
  }
`;

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

export const InfoWrapper = styled.div`
  background-color: white;

  & h2 {
    color: #0099e5;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    display: inline-block;
    margin: 2%;
  }

  & .links {
    margin-top: -1%;
    margin-bottom: -1%;
  }

  & .fa-globe-americas {
    color: gray;
    font-size: 18px;
  }

  & .icondiv {
    margin: 1%;
  }

  & hr {
    color: black;

    border: 0.5px solid #eaeaea;
  }

  & .bottomHr {
    margin-bottom: 0%;
  }
`;
