import "./card.scss";

export default function Card({ active, title, progress }) {
  return (
      <div className={`slide-item__card card ${active ? "active" : ""}`}>
        <h3>{title}</h3>
      </div>
  );
}
