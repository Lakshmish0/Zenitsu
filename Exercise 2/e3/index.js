// const changeTextButton = document.getElementById('changeTextBtn');
// const demoParagraph = document.getElementById('demo');

// // function handleCLick(){

// // }

// changeTextButton.addEventListener('click', function () {
//     const name = prompt("Enter Your Name")
//     demoParagraph.textContent = 'Welcome '+name;
// });

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});


closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});