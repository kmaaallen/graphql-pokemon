import "./Card.css";

type CardProps = {
  name: string;
  number: number;
  image: string;
};

export const Card = ({ name, number, image }: CardProps) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{number}</p>
      <img src={image} />
    </div>
  );
};
