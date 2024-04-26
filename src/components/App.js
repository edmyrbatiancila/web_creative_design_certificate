import React from 'react';
import { Container } from 'react-bootstrap';
import Certificate from './assets/img/Call_Center_Academy.jpg';
import './App.css';

export default function App() {
    return (
      <Container>
        <section className="certificate">
          <img
            src={Certificate}
            alt="Certificate Creative Web Design"
            className="zoomable-image"
          />
          <div className="certificate-info">
            <p>
              Certificate in <span>Web Creative Design</span>
            </p>
            <p>
              Issued by <span>Call Center Academy</span>
            </p>
          </div>
        </section>
      </Container>
    );
}