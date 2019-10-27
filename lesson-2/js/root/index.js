//object datatype
let news = [
  {
    "title":"Google I/O'19 *Google in a Keynote",
    "id":"lyRPyRKHO8M",
    "time":10
  },{
    "title":"New little kitten hisses at me",
    "id":"76TRoGOlGZA",
    "time":15
  }, {
    "title":"More cute kitten - cute Kitten's vlog",
    "id":"jANE8lpoj2c",
    "time":20
  }
];

//int main function, anonymous function
window.onload = function(){
  playNews(0);
  setInterval(setTime, 1000); 
}

// define function
function playNews(i){
  let video = document.querySelector("iframe");
  let title = document.querySelector("#content>h1");
  let next = (i+1)%news.length;
  console.log(i, news[i]);
  //video.src = "http://www.youtube.com/embed/"+news[i].url+"?rel=0&autoplay=1&loop=1&controls=0";
  video.src = `http://www.youtube.com/embed/${news[i].id}?rel=0&autoplay=1&loop=1&controls=0`;
  title.innerText = news[i].title;
  setTimeout(function(){
    playNews(next);
  }, news[i].time*1000);
}

function setTime(){
  let clock = document.querySelector("#time>h3");
  clock.innerText = time();
}
function time(){
  let t = new Date();
  return t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();
}
