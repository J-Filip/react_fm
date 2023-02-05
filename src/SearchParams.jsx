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
    <div className="search-params">
      
      <form
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
        <p>{adoptedPet.name} is  waiting for you:</p>
            
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            name="location"
            id="location"
            type="text"
            placeholder="Add location..."
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
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
          <select name="breed" id="breed" disabled={breeds.length === 0}>
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
        <button type="submit">Search</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};
