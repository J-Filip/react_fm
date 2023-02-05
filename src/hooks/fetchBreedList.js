export const fetchBreedList = async ({ queryKey }) => {
      const animal = queryKey[1];
      
      if (!animal) return [];
      
      const apiRes = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);
    
      // we want to throw an error if unsuccessful request.
      if (!apiRes.ok) {
        throw new Error(`❌ /${animal} fetch NOT ok!`);
      }
      const data = await apiRes.json();
    
      // async always returns a promise.
      return data;
    };
    