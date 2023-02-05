// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchBreedList } from "./fetchBreedList";

export function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  // ! refactored useEffect with react query !
  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (localCache[animal]) {
  //     setBreedList(localCache[animal]);
  //   } else {
  //     getBreedList();
  //   }

  //   async function getBreedList() {
  //     setBreedList([]);
  //     setStatus("loading");
  //     const request = await fetch(
  //       `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //     );
  //     const data = await request.json();
  //     localCache[animal] = data.breeds || [];
  //     setBreedList(localCache[animal]);
  //     setStatus("loaded");
  //   }
  // }, [animal]);
  // !

  // JS optional chaning - if results object doesnt have .data property (and so on), return undefined (instead of error). If not found, return empty array.
  return [results?.data?.breeds ?? [], results.status];
}
