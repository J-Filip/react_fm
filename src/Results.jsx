import { Pet } from "./Pet";


// 
export const Results = ( {pets} ) => {
      console.log(pets);
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              // we can destructure pet
              // this is to implicit and also TS doesn't allow this.
              //     {...pet}
              animal={pet.animal}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};
