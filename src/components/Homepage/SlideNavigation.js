import React from "react";

export default function SlideNavigation({ active, total }) {
  const prev = (total + active - 1) % total + 1;
  const next = (active + 1) % total + 1;
  const current = active + 1;
  return (
      <div className="slide-navigation">
        <div className="slide-navigation__active">
          <div className="slide-navigation__item slide-navigation__item--active" key={current}>{current}</div>
          <div className="slide-navigation__item slide-navigation__item--inactive-up" key={next}>{next}</div>
          <div className="slide-navigation__item slide-navigation__item--inactive-down" key={prev}>{prev}</div>
        </div>
        <div className="slide-navigation__divider" />
        <div className="slide-navigation__total">{total}</div>
      </div>
  );
}
