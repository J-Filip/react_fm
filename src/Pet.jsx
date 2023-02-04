import { Link } from "react-router-dom";

export const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`🧬 ${animal} — ${breed}`}</h2>
        <h2>{`🏡 ${location}`}</h2>
      </div>
    </Link>
  );
};

// _____________________________________________________

// However, now you know what JSX is doing for you. It's just translating those HTML tags into React.createElement calls. That's it. Really. No more magic here. JSX does nothing else. Many people who learn React don't learn this.

// this was laughed at when first introduced by facebook.

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };
