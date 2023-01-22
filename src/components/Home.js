import React from "react";
import "../styles/home.css";
import { Button } from "react-bootstrap";

export default function Home() {
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
                <div>
                  <Button
                    variant="outline-light"
                    href="#"
                    className="header-btn register reg-company-btn"
                  >
                    Register Your Company
                  </Button>
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

      <div className="container feature-grid">
        <div className="feature">
          <span class="material-symbols-outlined">monitoring</span>
          <p className="categories">Track</p>
          <p className="description">Track the performance of your company</p>
        </div>
        <div className="feature">
          <span class="material-symbols-outlined">settings</span>
          <p className="categories">Management</p>
          <p className="description">Manage your projects and teams easily</p>
        </div>
        <div className="feature">
          <span class="material-symbols-outlined">summarize</span>
          <p className="categories">Reports</p>
          <p className="description">Generate reports of your company</p>
        </div>
        <div className="feature">
          <span class="material-symbols-outlined">list</span>
          <p className="categories">To Do</p>
          <p className="description">Create to do lists across your company</p>
        </div>
        <div className="feature">
          <span class="material-symbols-outlined">chat_bubble</span>
          <p className="categories">Chat</p>
          <p className="description">
            Increase interactivity within the company
          </p>
        </div>
        <div className="feature">
          <span class="material-symbols-outlined">groups</span>
          <p className="categories">Schedule</p>
          <p className="description">Schedule meetings and events facility </p>
        </div>
        <div className="feature">
          <span class="material-symbols-outlined">folder_open</span>
          <p className="categories">Routing</p>
          <p className="description">
            Easily route your documents across your company
          </p>
        </div>
        <div className="feature">
          <span class="material-symbols-outlined">campaign</span>
          <p className="categories">Announcements</p>
          <p className="description">
            Get notified with the latest anouncements
          </p>
        </div>
      </div>
    </div>
  );
}
