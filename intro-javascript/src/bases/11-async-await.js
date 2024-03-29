// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("https://asdadas.com"));
// getImagenPromesa().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = "ipfM1BP3waFk39RRg2KdIukXghEU3x7s";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
