import { useEffect, useState } from "react";
import { useBreedList } from "./hooks/useBreedList";

import { Results } from "./Results";

export const SearchParams = () => {
  const ANIMALS = ["dog", "cat", "rabbit", "bird", "reptile"];

  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const [breeds] = useBreedList(animal);
  // only run once after the first render.
  // the [] at the end of the useEffect is where you declare your data dependencies. React wants to know when to run that effect again. You don't give it data dependencies, it assumes any time any hook changes that you should run the effect again.
  useEffect(() => {
    console.log("🎇🎇 USE EFFECT 🎇🎇");
    getPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getPets() {
    const request = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const data = await request.json();
    console.log(data);
    setPets(data.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getPets();
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
            onChange={(e) => setBreed(e.target.value)}
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
        <button type="submit">Search</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};
