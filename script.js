const apiKey = 'pub_44859c7f01fd50cafafcf3b86be594aa579f9';
const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=Pegasus&language=en`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const articles = data.results;
    const carouselInner = document.querySelector('.carousel-inner');

    articles.forEach((article, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';

      const img = document.createElement('img');
      img.src = article.image_url;
      img.alt = article.title;

      const caption = document.createElement('div');
      caption.className = 'carousel-caption d-md-block';
      caption.innerHTML = `
        
        <p>${article.description}</p>
        <p>${article.content}</p>
      `;

      carouselItem.appendChild(img);
      carouselItem.appendChild(caption);

      if (index == 0) {
        carouselItem.className += ' active';
      }

      carouselInner.appendChild(carouselItem);
    });
  })
  .catch(error => console.error(error));