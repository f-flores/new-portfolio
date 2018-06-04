
$(document).ready(function () {
  const IMG_DIR = "./assets/images/";

  // -------------------------------------------------------------------------------------------------
  // parallax effect
  // Source: https://1stwebdesigner.com/parallax-scrolling-tutorial/
  //
  $("a[href*=\\#]").each(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      && location.hostname === this.hostname
      && this.hash.replace(/#/, '') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        var targetOffset = $target.offset().top;
        $(this).click(function () {
          $("#nav li a").removeClass("active");
          $(this).addClass('active');
          $('html, body').animate({ scrollTop: targetOffset }, 1000);
          return false;
        });
      }
    }
  });

  // ------------------------------------------------------------------------------------------------------
  // fill out aside menu -- 'Connect With Me' Box
  //
  function fillConnectWithMeBoxes() {
    var outerCard = $("<div>"),
        cardTitle = $("<div>"),
        mediaLinks = $("<div>"),
        mediaList = $("<ul>"),
        // myMediaArr is an array of objects which specifies each list element
        // in the 'Connect With Me' box
        myMediaArr = [{
          "mediaImg": "github-128.png",
          "mediaAlt": "Github Logo",
          "mediaUrl": "https://github.com/f-flores"
        },
        {
          "mediaImg": "linkedin-128.png",
          "mediaAlt": "LinkedIn Logo",
          "mediaUrl": "https://www.linkedin.com/in/francisco-f-flores/"
        },
        {
          "mediaImg": "stackoverflow-128.png",
          "mediaAlt": "StackOverflow Logo",
          "mediaUrl": "https://stackoverflow.com/users/9150518/f-flores"
        }],
        index = 0;
    
    cardTitle.html("<h4 class=\"text-center font-weight-bold\">Connect With Me</h4>");
    outerCard.addClass("card custom-bg").append(cardTitle);
    mediaLinks.addClass("media-links card-body");

    // build media list
    for (const elem of myMediaArr) {
      var listElem = $("<li>"),
          socialUrl = $("<a>"),
          mediaImg = $("<img>");
      
      socialUrl.attr("href", elem.mediaUrl).attr("target","_blank");
      mediaImg.attr("src", IMG_DIR + elem.mediaImg).attr("alt", elem.mediaAlt);
      socialUrl.append(mediaImg);
      listElem.append(socialUrl);
      mediaList.append(listElem); 
    }
    mediaLinks.append(mediaList);
    outerCard.append(mediaLinks);
    $(".connect-with-me").append(outerCard);
  }
  
  fillConnectWithMeBoxes();
});