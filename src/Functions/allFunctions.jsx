export const fetchData = async (endPoint) => {
  let res = await fetch('https://jsonplaceholder.typicode.com/' + endPoint);
  let data = await res.json()
  return data;
};
