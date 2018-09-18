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
    }, 60000);
    
    clearTimeout(() => {
      $(".modal").modal("hide");
    }, 60000);
});

/*
When there is no interaction with the screen for 15 minutes, slides will automatically start playing.
Reset timer will clear timeout and set a new timeout. 
Events trigger reset timer.
*/
$(() => {
  var idleTimer;
  function resetTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      location.href = './slides.html';
    }, 60000);
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