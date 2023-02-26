// TODO: add loading state.

import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { AdoptedPetContext } from "./AdoptedPetContext";

import { useBreedList } from "./hooks/useBreedList";
import { fetchSearch } from "./hooks/fetchSearch";

import { Results } from "./Results";

export const SearchParams = () => {
  const ANIMALS = ["dog", "cat", "rabbit", "bird", "reptile"];

  const [adoptedPet] = useContext(AdoptedPetContext);

  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    // <div className="my-0 mx-auto w-11/12 ">
    <div className="search-params ">
      {adoptedPet ? (
        <div className="search-params">
          <h2>{adoptedPet.name} is waiting for you:</h2>
        </div>
      ) : null}

      <form
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-50 p-10 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const searchData = {
            location: formData.get("location") ?? "",
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
          };

          setRequestParams(searchData);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            name="location"
            id="location"
            type="text"
            className="search-input"
            placeholder="Add location..."
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            className="search-input"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option label=" "></option>
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            className="search-input disabled:opacity-30"
            disabled={breeds.length === 0}
          >
            <option label=" "></option>
            {breeds.map((breed) => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button
          className="rounded border-none bg-purple-500 px-6 py-2 text-white hover:opacity-70"
          type="submit"
        >
          Search
        </button>
      </form>

      <Results pets={pets} />
    </div>
  );
};
