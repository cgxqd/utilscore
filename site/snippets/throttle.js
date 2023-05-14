setInterval(
  utilscore.throttle(() => {
    console.count("次数");
  }, 2000),
  100
);
