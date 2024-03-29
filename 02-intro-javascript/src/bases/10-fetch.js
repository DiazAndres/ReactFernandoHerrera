const apiKey = "ipfM1BP3waFk39RRg2KdIukXghEU3x7s";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
    // console.log(url);
  })
  .catch(console.warn);
