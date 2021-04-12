export default () => {
  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      id: i,
      title: 'River clouds',
      subtitle: 'Landscape',
      currentBid: getRandomNum(),
      owner: getRandomNum(),
      artist: getRandomNum(),
    });
  }
  return data;
};

function getRandomNum() {
  return Math.floor(Math.random() * 1000);
}
