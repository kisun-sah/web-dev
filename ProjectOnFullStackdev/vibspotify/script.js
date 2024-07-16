console.log('javascript');
let currentsong = new Audio();

async function getsongs() {
    try {
        let a = await fetch("http://127.0.0.1:3000/songs/");
        let response = await a.text();
        console.log(response);
        let div = document.createElement("div");
        div.innerHTML = response;
        let as = div.getElementsByTagName("a");

        let songs = [];
        for (let i = 0; i < as.length; i++) {
            const element = as[i];

            if (element.href.endsWith(".mp3")) {
                songs.push(element.href.split("/songs/")[1]);
            }
        }
        return songs;
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

const playMusic = (track) => {
    currentsong.src = "/songs/" + track; // Corrected property name
    currentsong.play();
    play.src = "pause.svg"
    document.querySelector(".songinfo").innerHTML = track
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function main() {
    // get the list of all the songs
    let songs = await getsongs();

    // show all the songs in the playlist 
    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUl.innerHTML += `<li>  
                                <img class="invert" src="music-icon.svg" alt="">
                                <div class="info">
                                    <div>${song.replaceAll("%20", " ")}</div>
                                    <div>Kartik</div>
                                </div>
                                <div class="playnow">
                                    <span>Play Now</span>
                                    <img class="invert" src="play-circle.svg" alt="">
                                </div>
                            </li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener('click', () => {
            const track = e.querySelector(".info").firstElementChild.innerHTML.trim();
            console.log(track);
            playMusic(track);
        });
    });

    //Attach an even listner  to play next and previous.
    play.addEventListener("click", () => {
        if(currentsong.paused){
            currentsong.play();
             play.src = "pause.svg"
       
        }else{
            currentsong.pause();
             play.src = "play-circle.svg"
        }
    })
}

main();
