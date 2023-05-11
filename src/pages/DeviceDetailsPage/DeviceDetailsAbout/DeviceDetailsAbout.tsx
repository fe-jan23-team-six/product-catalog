import React, { FC } from 'react';
import './DeviceDetailsAbout.scss';

export const DeviceDetailsAbout: FC = () => {
  return (
    <div
      className="device_details__about
      about grid__item--tablet-1-6 grid__item--desktop-1-12"
    >
      <h3 className="about__title">
        About
      </h3>

      <div
        className="about__details"
      >
        <div>
          <h4 className="about__details__subtitle">
            And then there was Pro
          </h4>

          <p className="about__details__text">
            A transformative triple‑camera system that adds tons of capability
            without complexity. An unprecedented leap in battery life. And
            a mind‑blowing chip that doubles down on machine learning and
            pushes the boundaries of what a smartphone can do. Welcome to
            the first iPhone powerful enough to be called Pro.
          </p>
        </div>

        <div>
          <h4 className="about__details__subtitle">
            And then there was Pro
          </h4>

          <p className="about__details__text">
            A transformative triple‑camera system that adds tons of capability
            without complexity. An unprecedented leap in battery life. And
            a mind‑blowing chip that doubles down on machine learning and
            pushes the boundaries of what a smartphone can do. Welcome to
            the first iPhone powerful enough to be called Pro.
          </p>
        </div>

        <div>
          <h4 className="about__details__subtitle">
            And then there was Pro
          </h4>

          <p className="about__details__text">
            A transformative triple‑camera system that adds tons of capability
            without complexity. An unprecedented leap in battery life. And
            a mind‑blowing chip that doubles down on machine learning and
            pushes the boundaries of what a smartphone can do. Welcome to
            the first iPhone powerful enough to be called Pro.
          </p>
        </div>
      </div>
    </div>
  );
};
