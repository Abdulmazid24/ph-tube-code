// 1- fetch , Load and show Categories on html
// create loadCategories
function getTimesString(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  return `${hour} hours ${minute} min ${remainingSecond} second ago`;
}
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
const loadCategoryVideos = id => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => displayVideos(data.category))
    .catch(error => console.error(error));
};

const displayVideos = videos => {
  const videoContainer = document.getElementById('videos');
  videoContainer.innerHTML = '';
  videos.forEach(video => {
    console.log(video);
    const card = document.createElement('div');
    card.classList = 'card card-compact';
    card.innerHTML = `
    <figure class="h-[200px] relative">
    <img class="h-full object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
      ${
        video.others.posted_date?.length === 0
          ? ''
          : `<span class="absolute right-2 bottom-4  text-white  text-extra-small">${getTimesString(
              video.others.posted_date
            )}</span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-center" src="${
      video.authors[0].profile_picture
    }"/>
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    ${
      video.authors[0].verified === true
        ? '<img class="w-5" src="https://img.icons8.com/?size=96&id=63760&format=png"/>'
        : ''
    }
    
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
    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML = `
    <button onclick="loadCategoryVideos(${item.category_id})" class="btn">${item.category}</button>
    `;
    // button.onclick = () => {
    //   alert('Hello');
    // };
    // add button to category container
    categoryContainer.append(buttonContainer);
  });
};
loadCategories();
loadVideos();
