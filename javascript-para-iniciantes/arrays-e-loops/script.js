var videoGames = ["Switch", "PS4", "Xbox", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") break;
}

videoGames.forEach(function (item) {
  console.log(item);
});
