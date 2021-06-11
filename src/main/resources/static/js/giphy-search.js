const getGiphyImage = () => {
  let query = config.url + "?api_key=" + config.key + "&q=pizza&limit=1&offset=0&rating=g&lang=en";

  fetch(query)
    .then(response => response.json())
    .then(json => {
      console.log(json.data[0].images.downsized.url);
    })
    .catch(error => console.log(error));
}