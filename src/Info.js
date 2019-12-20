import React from "react";
import { Link } from "react-router-dom";

import {
  InfoWrapper,
  GalleryTitle,
  Hero,
  Avatar,
  Container
} from "./Styles.js";

// destructuring
// get allCount prop from gallery
export default function Info({ allCount }) {
  return (
    <div>
      <InfoWrapper className="row center-xs">
        <Hero className="col-xs-12"></Hero>
        <Container>
          <Avatar></Avatar>
        </Container>

        <GalleryTitle className="col-xs-12">
          {" "}
          <h1>A Photo Gallery</h1>
          <h4>By Wesley</h4>
        </GalleryTitle>

        <div className="icondiv col-xs-12">
          {" "}
          <i className="fas fa-globe-americas"></i>
        </div>

        <div className="col-xs-12">
          <hr />
          <div className="links">
            <Link to="/">
              {/* display photo count */}
              <h2> photos {allCount}</h2>
            </Link>
            <Link to="/about">
              <h2> about</h2>
            </Link>
          </div>
          <hr className="bottomHr" />
        </div>
      </InfoWrapper>
    </div>
  );
}
