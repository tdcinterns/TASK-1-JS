const URL = "https://jsonplaceholder.typicode.com/todos";

async function FetchingData(URL)
{
  try
  {
    let result = await fetch(URL);
    if (result.status === 200)
    {
      let data = await result.json();
      console.log(`Data: ${data}`);
      console.log(`Status: ${result.status}`);
    }
    else if (result.status === 400)
    {
      console.log("Client Error Responses");
    }
    else if (result.status === 500)
    {
      console.log("Server Error Responses");
    }
  }
  catch (error)
  {
    console.error(`Error: ${error.message}`);
  }
};
FetchingData(URL);