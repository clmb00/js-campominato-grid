const container = document.querySelector('.main_container');
const numberRows = 10;
const playButton = document.querySelector('header button');

playButton.addEventListener('click', function(){
  container.innerHTML = ""
  const difficulty = document.querySelector('header select').value;
  console.log(difficulty);
  createGrid(numberRows);
  playButton.innerHTML = "New game"
})

function createGrid(numberRows){

  for(let i = 0; i < Math.pow(numberRows, 2); i++){
    container.append(createCell(numberRows, i+1));
  }

}

function createCell(numberRows, index){
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.width = 'calc(100% / ' + numberRows + ')';
  box.style.height = 'calc(100% / ' + numberRows + ')';
  box.innerHTML = index;
  return box;
}