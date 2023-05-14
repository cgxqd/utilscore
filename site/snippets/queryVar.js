let vars = {};
setTimeout(() => (vars.a = 666), 5000);
utilscore
  .queryVar(() => vars.a, 100)
  .then(a => {
    console.log(a);
  });
