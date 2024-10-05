console.log('video link up');
// 1- fetch , Load and show Categories on html
// create loadCategories
const loadCategories = () => {
  // fetch the data
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
};
loadCategories();
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
