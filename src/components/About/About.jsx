import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import {Tilt} from 'react-tilt';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const About = () => {
  return (
    <Wrapper>
      <h1 className="about-heading wrapper-background">
        About <span className="about-sub-heading">Us</span>
      </h1>

      <div className="container">
        <div className="section-inner">
          <div className="section-hero-image">
            <picture>
              <Tilt options={defaultOptions} className="Tilt">
                <div className="Tilt-inner">
                  <img
                    className="hero-img"
                    src="/images/about-img.png"
                    alt=""
                  />
                </div>
              </Tilt>
            </picture>
          </div>
          <div className="section-hero-data">
            <h1 className="heading-text">Our Vision</h1>
            <p className="hero-para">
              At Pizzas, we don’t just make pizza. We make people happy. Pizzas
              was built on the belief that pizza night should be special, and we
              carry that belief into everything we do. With more than 15 years
              of experience under our belts, we understand how to best serve our
              customers through tried and true service principles: We create
              food we’re proud to serve and deliver it fast, with a smile.
            </p>
            <Button className="btn">
              <NavLink to="/contact">
                Know More <BsFillArrowRightCircleFill />
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-heading {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    .about-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .section-inner {
    margin: 7rem 0;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .heading-text {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 600;
    color: rgb(87, 84, 87);
    span {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .btn {
    max-width: fit-content;
    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .about-heading {
      font-size: 4rem;
    }
    .section-inner {
      margin: 5rem 0;
      display: flex;
      flex-direction: row;
      gap: 5rem;
    }
    .section-hero-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
    }
    .section-hero-image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
    }
    a {
      font-size: 1.6rem;
    }
    .section-inner {
      margin: 10rem 0;
      display: flex;
      flex-direction: row;
      gap: 5rem;
    }
    .heading-text {
      font-size: 4rem;
    }
  }
`;

export default About;
