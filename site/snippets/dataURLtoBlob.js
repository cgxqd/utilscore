utilscore.getImgToBlob("/assets/icon.svg").then(async blob => {
    const dataURL = await utilscore.blobToDataURL(blob);
    const blob2 = await utilscore.dataURLtoBlob(dataURL);
    console.log(URL.createObjectURL(blob2));
});
