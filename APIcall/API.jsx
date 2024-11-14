
export const URL = "https://v3.football.api-sports.io/standings?league=39&season=2022";



export async function fetchData(setData) {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": import.meta.env.VITE_APIKEY
      }
    });
    
    // console.log(response)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    setData(data)
    console.log(data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}


