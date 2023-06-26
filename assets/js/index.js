const musicItem = document.querySelector(".musicItems");
const musicItemPopular = document.querySelector(".musicItems--popular");
const musicItemHot = document.querySelector(".musicItem--hot");
const musicItemNew = document.querySelector(".musicItem--new");
const nowPlayingInfor = document.querySelector(".nowPlaying__infor");
const nowPlaying = document.querySelector(".nowPlaying");
const playBtn = document.querySelector(".playBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const audio = document.querySelector(".audio");
const timeRun = document.querySelector(".control__bar__timeRun");
const duration = document.querySelector(".control__bar__duration");
const barControl = document.querySelector(".control__bar");
const runningControl = document.querySelector(".control__bar--running");
const circleControl = document.querySelector(".control__circle");
const libraryItems = document.querySelector(".library__items");
const loading = document.querySelector(".loading");
const loginWrapper = document.querySelector(".login__wrapper");
const closeLoginBtn = document.querySelector(".login__closebtn");
const loginBtn = document.querySelector(".loginBtn");
const loginForm = document.querySelector(".login");
const main = document.querySelector("main");

let songs = [
  {
    idSong: 1,
    name: "Nấu ăn cho em",
    singer: "Đen",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02bcbd4a38b226dbd8041ac4b2",
  },
  {
    idSong: 2,
    name: "Mãi Mãi Không Phải Anh",
    singer: "Đen",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e0221227633171aaad0cb4456d8",
  },
  {
    idSong: 4,
    name: "Cũng đành thôi",
    singer: "Đức Phúc",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e026f7355de609524cb46c0ab47",
  },
  {
    idSong: 5,
    name: "Chắc Ai Đó Sẽ Về",
    singer: "Sơn Tùng MTP",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02af31997b23b7e6e65de1816b",
  },
  {
    idSong: 6,
    name: "Suýt Nữa Thì",
    singer: "Andiez",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e0234530b3afdbeb6f8a7a1ed42",
  },
  {
    idSong: 7,
    name: "Hoa Cỏ Lau",
    singer: "Phong Max",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e021308aa57139be1f6d48045ef",
  },
  {
    idSong: 8,
    name: "Transits",
    singer: "Tyra Chantey",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e021f83bc87c769ff1cc608d6d6",
  },
  {
    idSong: 9,
    name: "Một Bước Yêu Vạn Dặm Đau",
    singer: "Mr.Siro",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02fec60dc00d6f833379047450",
  },
  {
    idSong: 10,
    name: "People",
    singer: "Libianca",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02fc342f95f117d48dbdde9735",
  },
  {
    idSong: 11,
    name: "Vì Anh Đâu có Biết",
    singer: "Vũ.",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e022461003df8139247949c8a9d",
  },
  {
    idSong: 12,
    name: "Wrong Time",
    singer: "puppy, Dangrangto",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02b49a7dc74ae0435eeed4ccd0",
  },
  {
    idSong: 13,
    name: "double take",
    singer: "dhruv",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e026f04e53cb5309f8e88286842",
  },
  {
    idSong: 14,
    name: "LIMBO",
    singer: "keshi",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e0219aff2da63b211d75341e8eb",
  },
  {
    idSong: 15,
    name: "Có Em",
    singer: "Madihu",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02556e7b75fb148c696f99a709",
  },
  {
    idSong: 16,
    name: "Lan Man",
    singer: "Ronboogz",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02609a4df0a97c122ffa47b8f6",
  },
  {
    idSong: 27,
    name: "Arcade",
    singer: "Duncan Laurence",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02a954408e456d4d9d410f448b",
  },
  {
    idSong: 28,
    name: "Hometown Smile",
    singer: "Bahjat",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02df09d4358820e247058fb02f",
  },
  {
    idSong: 29,
    name: "Talking to the Moon",
    singer: "runo Mars",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02f6b55ca93bd33211227b502b",
  },
  {
    idSong: 30,
    name: "deja vu",
    singer: "Olivia Rodrigo",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02a91c10fe9472d9bd89802e5a",
  },
  {
    idSong: 31,
    name: "Cheating on You",
    singer: "Charlie Puth",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e028de02872d0f01145d616ca6f",
  },
  {
    idSong: 32,
    name: "If We Have Each Other",
    singer: "Alec Benjamin",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02395d59483c3e2546832dfb7f",
  },
  {
    idSong: 33,
    name: "lovely (with Khalid)",
    singer: "Billie Eilish",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e028a3f0a3ca7929dea23cd274c",
  },
  {
    idSong: 34,
    name: "Thôi Em Đừng Đi",
    singer: "RPT MCK",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02b315e8bb7ef5e57e9a25bb0f",
  },
  {
    idSong: 35,
    name: "nếu lúc đó",
    singer: "tlinh",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e025b447e0566aadb805ebc5721",
  },
  {
    idSong: 36,
    name: "Anh Đã Từ Bỏ Rồi Đấy",
    singer: "Nguyenn",
    src: "../music/song2.mp3",
    url: "https://i.scdn.co/image/ab67616d00001e02209e80eae6638ae3c0623e02",
  },
];
window.addEventListener("resize", () => {
  const libraryItemsClient = libraryItems.getBoundingClientRect();
  const nowPlayingClient = nowPlaying.getBoundingClientRect();
  const mainClient = main.getBoundingClientRect();
  libraryItems.style.height =
    nowPlayingClient.top - libraryItemsClient.top - 14 + "px";
  main.style.height = nowPlayingClient.top - mainClient.top - 14 + "px";
  console.log(123);
  audio.addEventListener("timeupdate", barRunning);
  audio.addEventListener("timeupdate", timeRunning);
  barControl.addEventListener("click", handleClickBarControl);
  barControl.addEventListener("mousedown", handleMousedown);
});
const addSong = (songs) => {
  songs.forEach((song, i) => {
    const childEle = document.createElement("li");
    childEle.classList.add("songItem");
    childEle.innerHTML = `
    <a class="song" idSong="${song.idSong}" href="#"
    ><img class="songItem__img" src="${song.url}" alt=""
    /></a>
    <div class="info-albumn">
    <h3>${song.name}</h3>
    </div>
    `;
    if (i < 10) {
      musicItem.appendChild(childEle);
    } else if (i >= 10 && i < 15) {
      musicItemPopular.appendChild(childEle);
    } else if (i >= 15 && i < 20) {
      musicItemHot.appendChild(childEle);
    } else {
      musicItemNew.appendChild(childEle);
    }
  });
};
const addSongLibrary = (songs) => {
  songs.forEach((song, index) => {
    if (index >= 10) {
      const childEle = document.createElement("div");
      childEle.setAttribute("idSong", song.idSong);
      childEle.classList.add("library__item");
      childEle.classList.add("song");
      childEle.innerHTML = `<img
    class="library__item__img"
    src="${song.url}"
  />
  <div class="library__item__infor">
    <h3 class="library__item__title">${song.name}</h3>
    <p class="library__item__describe">${song.singer}</p>
  </div>`;
      libraryItems.appendChild(childEle);
    }
  });
  const itemSong = document.querySelectorAll(".song");
  addMultipleEventListener(itemSong, "click", (item) => {
    const idSongActive = item.getAttribute("idSong");
    console.log(idSongActive);
    songs.forEach((song) => {
      if (song.idSong == idSongActive) {
        nowPlayingInfor.innerHTML = `
  <img
    class="nowPlaying__infor__img"
    src="${song.url}"
  />
  <div class="nowPlaying__infor--describe">
    <h3 class="nowPlaying__infor__title">${song.name}</h3>
    <p class="nowPlaying__infor__singer">${song.singer}</p>
  </div>
  <i class="nowPlaying__infor__icon fa-regular fa-heart"></i>
  `;
      }
    });
  });
};
const handleClickBarControl = (e) => {
  const clientBarControl = barControl.getBoundingClientRect();
  playAudio();
  const duration = audio.duration;
  const width = e.clientX - clientBarControl.left;
  runningControl.style.width = width + "px";
  console.log(e.clientX);
  console.log(clientBarControl.left);
  console.log(width);
  console.log(runningControl.style.width);
  audio.currentTime = (width / barControl.clientWidth) * duration;
};
const handleMousedown = (e) => {
  const clientBarControl = barControl.getBoundingClientRect();
  playAudio();
  audio.removeEventListener("timeupdate", barRunning);
  window.addEventListener("mousemove", audioMouseMove);
  window.addEventListener("mouseup", audioMouseUp);
  let width = e.clientX - clientBarControl.left;
  function audioMouseMove(e) {
    if (e.clientX > clientBarControl.right) {
      width = barControl.clientWidth;
    } else if (e.clientX < clientBarControl.left) {
      width = 0;
    } else {
      width = e.clientX - clientBarControl.left;
    }
    runningControl.style.width = width + "px";
  }
  function audioMouseUp(e) {
    const duration = audio.duration;
    audio.currentTime = (width / barControl.clientWidth) * duration;
    window.removeEventListener("mousemove", audioMouseMove);
    audio.addEventListener("timeupdate", barRunning);
    window.removeEventListener("mouseup", audioMouseUp);
  }
};
window.addEventListener("load", function () {
  addSong(songs);
  addSongLibrary(songs);
  setTimeout(() => {
    loading.classList.add("hidden");
  }, 100);
  const libraryItemsClient = libraryItems.getBoundingClientRect();
  const nowPlayingClient = nowPlaying.getBoundingClientRect();
  const mainClient = main.getBoundingClientRect();
  libraryItems.style.height =
    nowPlayingClient.top - libraryItemsClient.top - 14 + "px";
  main.style.height = nowPlayingClient.top - mainClient.top - 14 + "px";
});

const addMultipleEventListener = (arr, action, callback) => {
  arr.forEach((item) => {
    item.addEventListener(action, () => callback(item));
  });
};
barControl.addEventListener("click", handleClickBarControl);
barControl.addEventListener("mousedown", handleMousedown);

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
function playAudio() {
  playBtn.classList.remove("active");
  pauseBtn.classList.add("active");
  audio.play();
}
function pauseAudio() {
  pauseBtn.classList.remove("active");
  playBtn.classList.add("active");
  audio.pause();
}
audio.addEventListener("timeupdate", barRunning);
audio.addEventListener("timeupdate", timeRunning);
audio.addEventListener("ended", () => {
  pauseBtn.classList.remove("active");
  playBtn.classList.add("active");
});
function barRunning(e) {
  const duration = audio.duration;
  const width = (audio.currentTime / duration) * barControl.clientWidth;
  runningControl.style.width = width + "px";
}
function timeRunning(e) {
  if (Math.floor(audio.currentTime) < 10) {
    timeRun.textContent = `0:0${Math.floor(audio.currentTime)}`;
  } else if (
    Math.floor(audio.currentTime) >= 10 &&
    Math.floor(audio.currentTime) < 60
  ) {
    timeRun.textContent = `0:${Math.floor(audio.currentTime)}`;
  } else {
    let minute = Math.floor(Math.floor(audio.currentTime) / 60);
    let second = Math.floor(audio.currentTime) % 60;
    if (second < 10) {
      timeRun.textContent = `${minute}:0${second}`;
    } else {
      timeRun.textContent = `${minute}:${second}`;
    }
  }
}

const showLogin = () => {
  loginWrapper.classList.add("showLogin");
  setTimeout(() => {
    loginForm.classList.add("showLogin");
  }, 1);
};
const hideLogin = () => {
  loginForm.classList.remove("showLogin");
  setTimeout(() => {
    loginWrapper.classList.remove("showLogin");
  }, 400);
};

loginBtn.addEventListener("click", showLogin);
loginWrapper.addEventListener("click", hideLogin);
closeLoginBtn.addEventListener("click", hideLogin);
loginForm.addEventListener("click", (e) => {
  e.stopPropagation();
});
