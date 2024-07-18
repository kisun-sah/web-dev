console.log('javascript');
let currentsong = new Audio();
let  songs;



function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

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

const playMusic = (track , pause = false) => {
    currentsong.src = "/songs/" + track; // Corrected property name
    if(!pause){
        currentsong.play();
            play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function main() {
    // get the list of all the songs
     songs = await getsongs();
    playMusic(songs[0] ,true);

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
    // Listen for timeupdate event
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds( currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left = ( currentsong.currentTime  /  currentsong.duration) * 100 + "%";
    })

    //Add  an event listener seekbar
    document.querySelector('.seekbar').addEventListener('click' , (e) => {
     let percent = ( e.offsetX /e.target.getBoundingClientRect().width )* 100;
    document.querySelector('.circle').style.left=percent +"%";
    currentsong.currentTime = ((currentsong.duration)*percent)/100
    }) 

    // Add an event listener for hamburgerIcon
    document.querySelector('.hamburger').addEventListener(('click' ), () =>{
    document.querySelector('.left').style.left = '0'
    })

      // Add an event listener for close button 
      document.querySelector('.close').addEventListener(('click') , () =>{
        document.querySelector('.left').style.left = '-120%'
      })

      //Add and event listener to previous  
      previous.addEventListener('click' , () =>{
        let index = songs.indexOf(   currentsong.src.split("/").slice(-1)[0]);
        if((index-1) >= 0){

            playMusic(songs[index-1])
        }
      })
        //Add and event listener to  Next.
      next.addEventListener('click' , () =>{
        currentsong.pause();

        let index = songs.indexOf(   currentsong.src.split("/").slice(-1)[0]);
        if((index+1) < songs.length){

            playMusic(songs[index+1])
        }
      })

      // Add an event to volume 
      document.querySelector('.range').getElementsByTagName('input')[0].addEventListener(("change"),(e) => {
        currentsong.volume = parseInt(e.target.value)/100;
      })
}

main();