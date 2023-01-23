import React from "react";
import "../styles/home.css";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Categories from "../json/categories.json";

export default function Home() {
  //TOOLTIP
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Login
    </Tooltip>
  );

  return (
    <div>
      <div className="main-top">
        <div className="top-container">
          <div className="home-main container">
            <div className="left-main">
              <div className="left-inner">
                <p className="lead flex-wrap">
                  <span>Work Remotely</span> <span>With Workspace</span>
                </p>
                <p className="flex-wrap  lead-second">
                  Register today and Manage your work at home
                </p>
                <div className="top-btns">
                  <Button
                    variant="outline-light"
                    href="#"
                    className="header-btn register reg-company-btn"
                  >
                    Register Your Company
                  </Button>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button
                      variant="outline-light"
                      href="#"
                      className="header-btn login reg-company-btn login-body"
                    >
                      <i class="fa-sharp fa-solid fa-right-to-bracket"></i>
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
            <div className="right-main img-fluid"></div>
          </div>
        </div>
      </div>
      {/* BODY */}
      <div className="topic topic-intro">FEATURED TOUR PACKAGES</div>
      <div className="topic topic-main">Browse Top Categories</div>

      {/* //CATEGORIES */}
      <div className="container feature-grid">
        {Categories.map((category) => {
          return (
            <div className="feature" key={category.id}>
              <span class="material-symbols-outlined">{category.icon}</span>
              <p className="categories">{category.category}</p>
              <p className="description">{category.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
