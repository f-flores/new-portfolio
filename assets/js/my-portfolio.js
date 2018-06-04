
$(document).ready(function () {
  const IMG_DIR = "./assets/images/";
  const MAX_PROJS_PER_ROW = 3;

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
  // fill portfolio info
  //
  function fillPortfolioInfo() {
    var myProjects = [{
      "projUrl": "https://blooming-shore-12371.herokuapp.com/",
      "projImg": "agile-flow.png",
      "projImgAlt": "Agile Flow",
      "captionText": "Agile Flow"
    },
    {
      "projUrl": "https://powerful-sands-40702.herokuapp.com",
      "projImg": "sqlized-burger.png",
      "projImgAlt": "Sequelized Burger",
      "captionText": "Eat-Da-Burger"
    },
    {
      "projUrl": "https://morning-brushlands-77006.herokuapp.com",
      "projImg": "friend-finder.png",
      "projImgAlt": "Friend Finder",
      "captionText": "Friend Finder"
    },
    {
      "projUrl": "https://f-flores.github.io/RPS-Multiplayer/",
      "projImg": "rps.png",
      "projImgAlt": "RPS Multiplayer",
      "captionText": "RPS-MultiPlayer"
    },
    {
      "projUrl": "https://f-flores.github.io/bamazon",
      "projImg": "bamazon.png",
      "projImgAlt": "Bamazon MySQL",
      "captionText": "Bamazon"
    },
    {
      "projUrl": "https://f-flores.github.io/ConstructorHangman",
      "projImg": "constructor-hangman.png",
      "projImgAlt": "Constructor Hangman",
      "captionText": "Constructor Hangman"
    },
    {
      "projUrl": "https://f-flores.github.io/liri-node-app",
      "projImg": "liri-terminal.png",
      "projImgAlt": "Liri Node App",
      "captionText": "Liri Node App"
    },
    {
      "projUrl": "https://f-flores.github.io/GifTastic",
      "projImg": "giftastic.png",
      "projImgAlt": "GifTastic",
      "captionText": "GifTastic"
    },
    {
      "projUrl": "https://f-flores.github.io/TriviaGame",
      "projImg": "trivia-game.png",
      "projImgAlt": "Trivia Game",
      "captionText": "Trivia Game"
    },
    {
      "projUrl": "https://f-flores.github.io/starwars-rpg/",
      "projImg": "starwars-rpg.png",
      "projImgAlt": "Star Wars Rpg",
      "captionText": "Star Wars RPG Game"
    },
    {
      "projUrl": "https://f-flores.github.io/Hangman-Game/",
      "projImg": "hangman-game.png",
      "projImgAlt": "Hangman Game",
      "captionText": "Hangman"
    },
    {
      "projUrl": "https://scratch.mit.edu/projects/195714556/",
      "projImg": "cat_and_mouse.png",
      "projImgAlt": "Cat and Mouse Game",
      "captionText": "Cat and Mouse"
    }],
    projCount = 0,
    rowCount = 0,
    connectAside = $("<aside>");

    for (const elem of myProjects) {
      var index = 0,
          projFigure = $("<figure>"),
          projLink = $("<a>"),
          projImg = $("<img>"),
          projCap = $("<caption>");

      projCount++;
      console.log("projCount, rowCount: ", projCount, rowCount);
      // start row on the very first element or on every third element from second row onward
      if ((projCount === 1 && rowCount === 0 ) || (rowCount > 0 && (projCount % MAX_PROJS_PER_ROW) === 0 )) {
        if (rowCount > 0) {
          $(".portfolio-container").append(divRow);
        }
        divRow = $("<div>");
        divRow.addClass("row row-portfl-lm");
        // increment row only when rowCount is greater than 0 -- this takes into account
        // the first row's special case in the condition below because of the 'Connect With Me' box
        if (rowCount > 0 && projCount !== MAX_PROJS_PER_ROW) rowCount++;
      }
    
      projImg.attr("src", IMG_DIR + elem.projImg).attr("alt", elem.projImgAlt);
      projLink.attr("href", elem.projUrl).attr("target","_blank").
               append(projImg);
      projCap.addClass("caption-text").html(elem.captionText);
      projFigure.addClass("col-xs-12 col-md-4 image-container").
                 append(projLink).
                 append(projCap);
      divRow.append(projFigure);

      // special case for first row, add 'Connect With Me' box as third element
      // and continue with next row
      if (projCount === (MAX_PROJS_PER_ROW - 1) && rowCount === 0 ) {
        connectAside.addClass("col-xs-12 col-md-4 connect-with-me");
        // divRow.append(projFigure) ???
        divRow.append(connectAside);
        $(".portfolio-container").append(divRow);
        rowCount++;
        divRow = $("<div>");
        divRow.addClass("row row-portfl-lm");
      }
    }


/*     <div class="row row-portfl-lm">
    <figure class="col-xs-12 col-md-4 image-container">
      <a href="https://f-flores.github.io/bamazon" target="_blank">
        <img src="./assets/images/bamazon.png" alt="Bamazon MySQL" />
      </a>
      <figcaption class="caption-text">Bamazon</figcaption>
    </figure>

    <figure class="col-xs-12 col-md-4 image-container">
      <a href="https://f-flores.github.io/ConstructorHangman" target="_blank">
        <img src="./assets/images/constructor-hangman.png" alt="Constructor Hangman" />
      </a>
      <figcaption class="caption-text">Constructor Hangman</figcaption>
    </figure>

    <figure class="col-xs-12 col-md-4 image-container">
      <a href="https://f-flores.github.io/liri-node-app" target="_blank">
        <img src="./assets/images/liri-terminal.png" alt="Liri Node App" />
      </a>
      <figcaption class="caption-text">Liri Node App</figcaption>
    </figure>

  </div> */



  }

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
  
  fillPortfolioInfo();
  fillConnectWithMeBoxes();
});