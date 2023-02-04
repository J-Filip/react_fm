import { useQuery } from "@tanstack/react-query";

import { fetchSearch } from "./fetchSearch";

export function usePetList(location, animal, breed) {
  const results = useQuery(["search", location, animal, breed], fetchSearch);

  return [results?.data?.pets ?? []];
}
