import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vipul Kumar </span>
            A <span className="purple">Tech Enthusiast </span>
            <br />
            I am Btech Grad of Srm Univeristy Sonipat .
            <br />
            I have completed Computer Science Engineering on 2023
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watch anime/Reading Manga
            </li>
            <li className="about-activity">
              <ImPointRight /> Rreading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Charity work at Temple
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My long time goal is to become financialally Independent at age of 40 "{" "}
          </p>
          <footer className="blockquote-footer">Vipul Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
