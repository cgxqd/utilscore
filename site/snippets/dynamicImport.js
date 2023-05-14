utilscore
  .dynamicImport(
    "https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js",
    "jQuery"
  )
  .then(jq => console.log(jq("body")));
