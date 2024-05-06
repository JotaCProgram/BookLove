var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  small: 9,
  medium: 14
};
var played = [];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container",  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Best",
      textAlign: "right",
      y: 20,
      x: -40,
      delay: 500,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Muito Obrigado por esta na minha vida.",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "Eu nunca gostei tanto de uma pessoa igual eu gosto de ti.",
      id: "sphinx",
      x: posX,
      delay: 1000,
      duration: 4500
    },
    {
      text: "Obrigado por existir!",
      id: "end",
      color: "#E91E63",
      delay: 1000,
      x: posX,
      duration: 4500
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Simplismente voce",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -40,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "e a melhor, companhia, que uma pessoa pode ter.",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "engracada, energia contagiante, forte, o seu sorriso me encanta.",
      y: 40,
      x: posX,
      duration: 3500
    },
    {
      text: "Lembre-se, voce e importante, meio raio de sol.",
      y: 40,
      x: posX,
      color: "#E91E63",
      duration: 3500
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.small,
    autoAnimation: false
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Love You",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -40,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Voce vai sempre morar no meu peito.",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "independente, do tempo, do universo, simplismente, Sempre! ",
      y: 20,
      x: posX,
      duration: 3500
    },
     {
      text: "Um dia, quero esta contigo e te da um abraco, apertado. ",
      y: 20,
      x: posX,
      duration: 3500
    },
    {
      text: "Obrigado, Love You!",
      y: 23,
      color: "#E91E63",
      id: "link",
      x: posX,
      duration: 1500
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.small,
    autoAnimation: false
  }
);

vara[3] = new Vara(
  "#vara-container4",  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "18 Jan 2019",
      textAlign: "right",
      y: 20,
      x: -30,
      delay: 500,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Start the year with something cool.",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "Like with a library,",
      id: "sphinx",
      x: posX,
      delay: 1000,
      duration: 4500
    },
    {
      text: "..... that can animate text writing",
      id: "end",
      color: "#3f51b5",
      delay: 1000,
      x: posX,
      duration: 4500
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);

vara[3].ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 1;
        if (i == "link") {
          var group = o.container;
          var rect = vara[2].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
});
