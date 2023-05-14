utilscore.getImgToBlob("/assets/icon.svg").then(async blob => {
  const dataURL = await utilscore.blobToDataURL(blob);
  console.log(dataURL);
});
