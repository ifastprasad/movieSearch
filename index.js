'use strict';

const key = '7f5ab36f';

const inputElement = document.getElementById("query");

// inputElement.oninput = async function() {
//     try {
//            setTimeout(async () => {
//                 let res = await fetch();
//                 let data = await res.json();
//                 appendData(data.Search)
//                 console.log(data.Search);
//             }, 2000);
//     } catch (e) {
//         console.log("error : " + e);
//     }
// };


 

// Call the fetchApiData function whenever the search input changes
const searchInput = document.getElementById("query");
searchInput.addEventListener("input", event => {
  fetchApiData(event.target.value);
});

let timeoutId;

function fetchApiData(searchTerm) {

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    fetch(`http://www.omdbapi.com/?apikey=${key}&s=$${inputElement.value}`)
      .then(response => response.json())
      .then(data => {
        // Process the API response data
        console.log(data);
        if(data.Search !=false) {
            appendData(data.Search);
        }
        
        
      })
      .catch(error => console.error(error));
  }, 500);
}





let serchData = document.querySelector('.result');

function appendData(movies) {
    
    serchData.innerHTML = null;
    movies?.map(el => {
    
        let div = document.createElement('div');
        div.className = 'movive_result';

        let img = document.createElement('img');
        img.src = el.Poster;
        img.style.height = '65px';
        img.style.width = '65px';
        img.style.borderEndStartRadius = `5px`;
        img.style.borderEndEndRadius = '5px';
        img.style.borderStartEndRadius = '5px';
        img.style.borderStartStartRadius = '5px';

        let h3 = document.createElement('h3');
        h3.textContent = el.Title;
        h3.style.color = '#fff';
        h3.style.fontWeight = '500';
        h3.style.marginLeft = `10px`;

        div.append(img, h3);
        serchData.append(div);
    });

}







