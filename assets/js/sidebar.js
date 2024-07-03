import { api_key, fetchDatafromServer } from "./api.js";

export function sidebar(){
    const genreList = {};
    
    fetchDatafromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function ({ genres }) {
        // console.log(genres); 
        for (const {id, name} of genres) {
            genreList[id] = name;
        }
        // console.log(genreList); 
        genreLink();
    });

    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add('sidebarinner');

    sidebarInner.innerHTML = `
        <div class="sidebarlist">
            <p class="title">Genre</p>
        </div>
        <div class="sidebarlist">
            <p class="title">Language</p>
            <a href="./movie-list.html" class="sidebarlink">English</a>
            <a href="./movie-list.html" class="sidebarlink">Hindi</a>
            <a href="./movie-list.html" class="sidebarlink">Bengali</a>
        </div>
    `;

    const genreLink = function () {
        for (const [genreId, genreName] of Object.entries(genreList)) {
            const link = document.createElement('a');
            link.classList.add('sidebarlink');
            link.setAttribute('href', './movie-list.html');
            link.textContent = genreName; 
            // console.log(genreName); 
            sidebarInner.querySelectorAll('.sidebarlist')[0].appendChild(link);
        }
        const sidebar = document.querySelector('.sidebar');
        sidebar.appendChild(sidebarInner);
    }
}
