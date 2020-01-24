const searchInput = document.querySelector('.search-input');
const searchEngine = document.querySelector('.search-engine');
const searchGoogle = document.querySelector('.select-google');
const searchYoutube = document.querySelector('.search-youtube');

// placeHolder();

// function placeHolder() {

  searchEngine.addEventListener('change', (e) => {
    if (searchEngine.value === 'youtube') {
      searchInput.placeholder = 'Search YouTube';
    }
      else {searchInput.placeholder = 'Search Google';
    }
  });

  


function search() {
  if(searchEngine.value === 'google' && searchInput.value.length > 0){
    window.location = 'https://www.google.com/search?sourceid=chrome&ie=UTF-8&q=' + searchInput.value;
  } else if(searchEngine.value === 'youtube' && searchInput.value.length > 0){
    window.location = 'https://www.youtube.com/results?search_query=' + searchInput.value;
  }
}

/*---------- CLEAR SEARCH AFTER PRESS ENTER ----------*/
function clearSearch() {
  searchInput.value = '';
}

searchInput.addEventListener("keypress", function(e) {

  var key = e.which || e.keyCode || 0;

  if (key === 13) {
      search();
      clearSearch();
  }

});