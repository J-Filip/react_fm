import { useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { AdoptedPetContext } from "./AdoptedPetContext";
import { fetchPet } from "./hooks/fetchPet";
import { Carousel } from "./Carousel";
import { Modal } from "./Modal";
import { ErrorBoundary } from "./ErrorBoundary";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()

  // we dont need the adopted pet, we just want setter.
  const [, setAdoptedPet] = useContext(AdoptedPetContext)


  // it gets the id from context (object?) - all routes are wrapped insdide one component thas stores the id of the navigated link.
  const { id } = useParams();

  // details - we give it query key. So the first key is details and then a subkey of that is 1 and it has to match both. If it doesn't exist, call fetchPet.
  // ["details", id] will be passed as the queryKey to fetchPet function.

  const results = useQuery(["details", id], fetchPet);

  // e.g. multiple query keys (or we use object).
  // const results = useQuery(["details", id, gender, color], fetchPet);

  if (results.isError) {
    return <h3>💧 Ooops...are you sure you got the right address?</h3>;
  }
  // isLoading is for the first load. isFetching is for refetching
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">💢</h2>
      </div>
    );
  }

  console.log(results);
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} `}</h2>
        <h2>{`${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}> Adopt {pet.name}</button>
        <p>{pet.description}</p>

        {/* basic ternary operator - if showModal true, render Modal
    else render null */}
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                onClick={() => {
                  setAdoptedPet(pet)
                  navigate('/')
                }}
                >Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export const DetailsErrorBoundary = (props) => {
  return (
    <ErrorBoundary
      fallback={
        <h2>
          💧 This is an error. Ooops...
          <p>
            <Link to="/">← Please come back home </Link>←
          </p>
        </h2>
      }
    >
      {/* we don't have props currently but this spread operator is okay here because error boundary doesnt'thave to know about props that go into the details */}
      <Details {...props} />
    </ErrorBoundary>
  );
};
