const music = new Audio('1.mp3');

const songs = [
    {
        id:"1",
        songName:` Dear Desolation <br>
        <div class="subtitle">Thy Art Is Murder East</div>`,
        poster: "1.png" ,
        Song: "Dear Desolation",
    },

    {    id:"2",
        songName:` Humble <br>
        <div class="subtitle">Kendrick Lamar </div>`,
        poster: "2.png" ,
        Song: "Humble",
    },
    {
        id:"3",
        songName:`Devil Doesn't Bargain <br>
        <div class="subtitle">Alec Benjamin </div>`,
        poster: "3.png" ,
        Song: "Devil Doesn't Bargain",
    },
    {
        id:"4",
        songName:` Shitan <br>
        <div class="subtitle">Abyusif </div>`,
        poster: "4.png" ,
        Song: "Shitan",
    },
    {
        id:"5",
        songName:` Candy Shop <br>
        <div class="subtitle">50 Cent </div>`,
        poster: "5.png" ,
        Song: "Candy Shop",
    },
    {
        id:"6",
        songName:` Derniere Danse <br>
        <div class="subtitle">Indila </div>`,
        poster: "6.png" ,
        Song: "Derniere Danse",
    },
    {
        id:"7",
        songName:` Good Thing <br>
        <div class="subtitle">Zedd and Kehlani</div>`,
        poster: "7.png" ,
        Song: "Good Thing",
    }
]
function ReadSearch(){

    var s= document.getElementById("Search").value;
    for(var i = 0 ; i< songs.length ; i++){

        if(songs[i].Song==s) { index=i+1;  console.log("Work");

 music.src=`${index}.mp3`;
 music.play();
        posterr.src=`${index}.png`
        track_name.innerHTML = songs[index-1].songName;
        console.log(s);
        play.classList.remove('bi-play-fill');
        play.classList.add('bi-pause-fill');

    }}

}


Array.from(document.getElementsByClassName('songItem') ).forEach((Element, i)=>{

    Element.getElementsByTagName('img')[0].src = songs[i].poster;
    Element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

})

let play = document.getElementById('play');

    play.addEventListener('click',()=>{

        if (music.paused || music.currentTime <=0) {
            music.play();
            play.classList.remove('bi-play-fill');
            play.classList.add('bi-pause-fill');                            /* 3ashan zorar el play */
        }else{
            music.pause();
            play.classList.add('bi-play-fill');
            play.classList.remove('bi-pause-fill');
        }
    } )

const makeAllPlays = () =>{

    Array.from(document.getElementsByClassName('playlistplay')).forEach((Element)=>{
        Element.classList.add('bi-play-circle-fill');                                             /* zorar el play el gamb el o8mia */
        Element.classList.remove('bi-pause-circle-fill');

        })
    }

const makeAllbackgrounds = () =>{

    Array.from(document.getElementsByClassName('songItem')).forEach((Element)=>{

        Element.style.background = "rgb( 105, 105, 170, 0)";

        })
    }

let index = 0;
let posterr = document.getElementById('posterr');
let track_name = document.getElementById('track_name');


    Array.from(document.getElementsByClassName('playlistplay')).forEach((Element)=>{
     Element.addEventListener('click',(e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');              /* btsh8al el o8nia w tzhr el sora we esm el o8nia taht */
        music.src=`${index}.mp3`;
        music.play();
        posterr.src=`${index}.png`

        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

            song_title.forEach(ele =>{
            let{songName} = ele;
            track_name.innerHTML = songName;
        })
             play.classList.remove('bi-play-fill');
            play.classList.add('bi-pause-fill');
            music.addEventListener('ended',()=>{                      /* 3shan tsh8al el play lama adoos 3al o8nia */

            play.classList.add('bi-play-fill');
              play.classList.remove('bi-pause-fill');
        })
           makeAllbackgrounds();
           Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb( 105, 105, 170, 1)";
        })

})


let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
let music_curr = music.currentTime;
let music_dur = music.duration;

let min = Math.floor(music_dur/60);
let sec = Math.floor(music_dur%60);
if(sec<10){
  sec = `0${sec}`
}
currentend.innerText = `${min}:${sec}`;

let min1 = Math.floor(music_curr/60);
let sec1 = Math.floor(music_curr%60);
if(sec1<10){
  sec1 = `0${sec1}`
}
currentstart.innerText = `${min1}:${sec1}`;

let progressbar = parseInt((music.currentTime/music.duration)*100);
seek.value = progressbar;
let seekbar = seek.value;
bar2.style.width = `${seekbar}%`;
dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
  music.currentTime = seek.value* music.duration/100;
})

music.addEventListener('ended', ()=>{
  play.classList.add('bi-play-fill');
  play.classList.remove('bi-pause-fill');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('volbar')[0];

vol.addEventListener('change', ()=>{
  if(vol.value==0){
    vol_icon.classList.remove('bi-volume-down-fill')
    vol_icon.classList.add('bi-volume-mute-fill')
    vol_icon.classList.remove('bi-volume-up-fill')
  }
  if(vol.value>0){
    vol_icon.classList.add('bi-volume-down-fill')
    vol_icon.classList.remove('bi-volume-mute-fill')
    vol_icon.classList.remove('bi-volume-up-fill')
  }
  if(vol.value>50){
    vol_icon.classList.remove('bi-volume-down-fill')
    vol_icon.classList.remove('bi-volume-mute-fill')
    vol_icon.classList.add('bi-volume-up-fill')
  }

  let vol_a = vol.value;
  vol_bar.style.width =`${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', ()=>{
index -= 1;
if (index < 1) {
index = Array.from(document.getElementsByClassName('songItem')).length;
}
music.src=`${index}.mp3`;
music.play();
posterr.src=`${index}.png`

let song_title = songs.filter((ele)=>{
    return ele.id == index;
})

    song_title.forEach(ele =>{
    let{songName} = ele;
    track_name.innerHTML = songName;
})
 makeAllPlays()

     document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllbackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb( 105, 105, 170, 1)";
})

next.addEventListener('click', ()=>{
index -= 0;
index += 1;
if (index > Array.from(document.getElementsByClassName('songItem')).length)
 {
index = 1;
}
music.src=`${index}.mp3`;
music.play();
posterr.src=`${index}.png`

let song_title = songs.filter((ele)=>{
    return ele.id == index;
})

    song_title.forEach(ele =>{
    let{songName} = ele;
    track_name.innerHTML = songName;
})
 makeAllPlays()

     document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllbackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb( 105, 105, 170, 1)";
})

let fav = document.getElementById('fav');
fav.addEventListener('click', ()=>{
  window.location.assign('fav.html', '_blank');})
;
