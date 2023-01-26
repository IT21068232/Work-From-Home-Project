import React, { useState } from "react";
import "../styles/home.css";
import { Button, OverlayTrigger, Tooltip, Carousel } from "react-bootstrap";
import Categories from "../json/categories.json";
import caro1 from "../images/caro1.png";
import caro2 from "../images/caro2.png";
import caro3 from "../images/caro3.png";

export default function Home() {
  //TOOLTIP
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Login
    </Tooltip>
  );

  // CAROUSEL
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
              <span className="material-symbols-outlined">{category.icon}</span>
              <p className="categories">{category.category}</p>
              <p className="description">{category.description}</p>
            </div>
          );
        })}
      </div>

      <div className="browse">
        <div className="d-flex flex-column bd-highlight mb-3 container">
          <div className="p-2 bd-highlight browse-intro topic">
            FEATURED TOUR PACKAGES
          </div>
          <div className="bd-highlight browse-main topic">
            Make a Difference with your Remote Workspace!
          </div>
          <div className="p-2 bd-highlight text-center browse-btn-div">
            <Button
              variant="outline-light"
              href="#"
              className="header-btn register browse-btn"
            >
              BROWSE ALL CATEGORIES
            </Button>
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="container carousel">
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
          <Carousel.Item className="caro-item">
            <div className="testi-item">
              <img src={caro1} alt="testimonial1" />
              <h5>Peter Lawson</h5>
              <p className="profession">CEO</p>
              <p className="testi-desc">
                "Amazing tool and top class support. Workspace helped me above
                and beyond. Genuine service for you to enjoy and move forward!"
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="caro-item">
            <div className="testi-item">
              <img src={caro2} alt="testimonial2" />
              <h5>Amy Amrou</h5>
              <p className="profession">Manager</p>
              <p className="testi-desc">
                "I'm a big fan of Workspace because it makes it so much easier
                for me to catch up on my work I may have missed."
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="caro-item">
            <div className="testi-item">
              <img src={caro3} alt="testimonial3" />
              <h5>Jay Doe</h5>
              <p className="profession">Manager</p>
              <p className="testi-desc">
                "The Workspace really got me started on actually building
                something for my business."
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
