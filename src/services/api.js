const BASE_URL = 'https://denomadesapi.herokuapp.com/'

export const getCurrencies = async () => {
  try {
    return await fetch(`${BASE_URL}currencies`);
  } catch (e) {
    console.warn("error", e)
  }
}


export const getActivities = async () => {
  try {
    return await fetch(`${BASE_URL}activities`);
  } catch (e) {
    console.warn("error", e)
  }
}