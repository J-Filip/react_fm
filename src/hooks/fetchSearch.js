export const fetchSearch = async ({ queryKey }) => {
  const { location, animal, breed } = queryKey[1];

  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  // we want to throw an error if unsuccessful request.
  if (!apiRes.ok) {
    throw new Error(`❌ home/${location}/${animal}/${breed} fetch NOT ok!`);
  }
  const data = await apiRes.json();

  // async always returns a promise.
  return data;
};
