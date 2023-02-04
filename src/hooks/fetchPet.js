export const fetchPet = async ({ queryKey }) => {
  
  const id = queryKey[1];
  
  // we can have multiple query keys
  // const gender = queryKey[2];
  

  if (!id) {
    return [];
  }
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  // we want to throw an error if unsuccessful request.
  if (!apiRes.ok) {
    throw new Error(`❌ details/${id} fetch NOT ok!`);
  }
  const data = await apiRes.json();

  // async always returns a promise.
  return data;
};
