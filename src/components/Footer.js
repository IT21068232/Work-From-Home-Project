import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer container">
        <div className="foot-col">
          <div className="foot-topic">ABOUT US</div>
          <div className="foot-content">
            The best leading Work From Home Management System. Manage your work
            from anywhere around the world.
          </div>
        </div>
        <div className="foot-col">
          <div className="foot-topic">CONTACT INFO</div>
          <div className="foot-content">
            <p>Address: 284 Vauxhall St, Colombo 00300</p>
            <p>Phone: +011 779 456</p>
            <p>Email: info@workspace.com</p>
          </div>
        </div>
        <div className="foot-col">
          <div className="foot-topic">QUICK LINKS</div>
          <div className="foot-content">
            <p>Contact Us</p>
            <p>Support</p>
            <p>View Profile</p>
            <p>Testimonial</p>
          </div>
        </div>
        <div className="foot-col">
          <div className="foot-topic">NEWSLETTER</div>
          <div className="foot-content">
            <p>How to start an online business from home?</p>
          </div>
          <div className="foot-topic form">
            <form>
              <input
                type="text"
                className="footer-input"
                required="true"
                placeholder="Email Address"
              />
              <button className="footer-submit">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
