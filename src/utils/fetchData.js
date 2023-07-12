export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5567fca8c4msh27cd863fd22e30ap133ef2jsn983ddc8d8740',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;

}
