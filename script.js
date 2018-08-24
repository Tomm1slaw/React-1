var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: 3,
    title: 'Książe Czaruś',
    desc: 'Film o młodym księciu',
    img: 'https://images.pexels.com/photos/929435/pexels-photo-929435.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: 4,
    title: 'Rider',
    desc: 'Film o mistrzu kierownicy',
    img: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&h=350'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));