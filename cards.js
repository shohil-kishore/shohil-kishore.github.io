/* 
When a modal is closed, this stops the video from continuously playing.
Looks for modal hide. On hide, finds class ID and kills src.
*/
$(".modal").on("hidden.bs.modal", (element) => {
  // document.querySelector(".modal").id;
  id = element.target.id;
  $("#" + id +  " iframe").attr("src", $("#" + id + " iframe").attr("src"));
});

/*
When a modal is opened, this closes it after 10 minutes (time out).
Looks for modal show. On show, sets timeout to 10 minutes. 
As the function applies to a class, timeout must be cleared.
Otherwise, other modals that are opened will close early. 
*/
$(".modal").on("show.bs.modal", () => {
    setTimeout(() => {
      $(".modal").modal("hide");
    }, 600000);
    
    clearTimeout(() => {
      $(".modal").modal("hide");
    }, 600000);
});

/*
When there is no interaction with the screen for 30 minutes, slides will automatically start playing.
Reset timer will clear timeout and set a new timeout. 
Events trigger reset timer.
*/
$(() => {
  var idleTimer;
  function resetTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      location.href = './slides.html';
    }, 1800000);
  }
  $("#bodyTag").bind('mousemove keydown click', resetTimer); 
  resetTimer();
});

/*
Fades in page. 
When content has loaded, the fade class is removed.
*/
document.addEventListener("DOMContentLoaded", function(e) {
  document.body.className = '';
});

// /*
// Due to YouTube API changes related videos are shown when video ends. 
// To avoid this, the modal will close when the video ends (where state === zero).
// Initialise empty array of iFrame IDs.
// */
// var iframeIDs = [];

// // For each iFrame, add its ID to array.
// var iframes = document.querySelectorAll(".video-item iframe");
// iframes.forEach(function(iframe) {
// 	iframeIDs.push(iframe.id);
// });

// // On ready, create a new YT player. Pass through the onStateChange function.
// function onYouTubeIframeAPIReady() {
// 	iframeIDs.forEach(function(iframeID) {
// 		var player = new YT.Player(iframeID, {
// 			events: {
// 				onStateChange: onYouTubePlayerStateChange
// 			}
// 		});
// 	});
// }

// // When state is equal to zero, hide the modal and recreate players. Without recreate, player may stop working. 
// function onYouTubePlayerStateChange(event) {
//   // console.log(event.data)
//   if (event.data === 0) {
//     $(".modal").modal("hide");
//     onYouTubeIframeAPIReady();
//   }
// }
