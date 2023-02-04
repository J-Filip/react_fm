//TODO: remove search button and just have a dynamic filter - add breed to useEffect dependencies.

import {  useState } from "react";
import { useBreedList } from "./hooks/useBreedList";

import { Results } from "./Results";
import { usePetList } from "./hooks/usePetList";

export const ControlledSearchParams = () => {
  const ANIMALS = ["dog", "cat", "rabbit", "bird", "reptile"];

  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  
  const [pets] = usePetList({location, animal, breed})

  const [breeds] = useBreedList(animal);



  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // getPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            type="text"
            value={location}
            placeholder="Add location..."
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              console.log('aaa');
              setBreed("");
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
            id="breed"
            value={breed}
            disabled={breeds.length === 0}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
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
        {/* <button type="submit">Search</button> */}
      </form>

      <Results pets={pets} />
    </div>
  );
};
