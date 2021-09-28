//Offline backend URL
export const backendURL = "http://localhost:5000/api";

export const fetchData = async (
  uri,
  method = {
    method: "GET",
  }
) => {
  let response = await fetch(uri, method);
  return response;
};
