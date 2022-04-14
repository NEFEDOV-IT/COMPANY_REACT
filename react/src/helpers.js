const serverUrl =
  "https://twelve-data1.p.rapidapi.com/time_series?symbol=XAU%2FUSD&interval=1day&outputsize=30&format=json";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
    "X-RapidAPI-Key": "a63b643311msh9f5db8bc9d9305fp18babajsnc745b6d296a3",
  },
};

export async function requestPrice() {
  try {
    const response = await fetch(serverUrl, options);
    return response.json();
  } catch (err) {
    alert(err);
  }
}
