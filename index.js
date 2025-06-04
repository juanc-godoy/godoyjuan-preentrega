console.log("hola mundo");
const url=`https://fakestoreapi.com/products`;



const fetchData= async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("hubo un error");
  }
};

fetchData(url);