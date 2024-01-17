const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`В списку ${items.length} категорії:`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.log(`- Категорія: ${title}`);
  console.log(`- Кількість елементів в категорії: ${elements}`);
}); 