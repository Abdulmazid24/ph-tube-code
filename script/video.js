// 1- fetch , Load and show Categories on html
// create loadCategories
const loadCategories = () => {
  // fetch the data
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
};

const loadVideos = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.error(error));
};

const cardDemo = {
  authors: {
    profile_picture: 'https://i.ibb.co/D9wWRM6/olivia.jpg',
    profile_name: 'Olivia Mitchell',
    verified: '',
  },

  category_id: '1001',
  description:
    "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
  others: { views: '100K', posted_date: '16278' },
  thumbnail: 'https://i.ibb.co/L1b6xSq/shape.jpg',
  title: 'Shape of You',
  video_id: 'aaaa',
};
const displayVideos = videos => {
  const videoContainer = document.getElementById('videos');
  videos.forEach(video => {
    console.log(video);
    const card = document.createElement('div');
    card.classList = 'card card-compact';
    card.innerHTML = `
    <figure class="h-[200px]">
    <img class="h-full object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-center" src="${video.authors[0].profile_picture}"/>
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    <img class="w-5" src="https://img.icons8.com/?size=96&id=63760&format=png"/>
    </div>
    
    <p></p>
    </div>
  </div>
    `;
    videoContainer.append(card);
  });
};
// Creates DisplayCategories
const displayCategories = categories => {
  const categoryContainer = document.getElementById('categories');
  categories.forEach(item => {
    console.log(item);
    const button = document.createElement('button');
    button.classList = 'btn';
    button.innerText = item.category;
    // add button to category container
    categoryContainer.append(button);
  });
};
loadCategories();
loadVideos();
