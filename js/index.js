
$(document).ready(function() {

  // import view port library function
  jQuery.extend(verge);

  // smooth scrolling of viewport to target
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 900);
  });

  $('#down').click(function() {
    $('html,body').animate({
      scrollTop: $('#about').offset().top - 50
    }, 900);
  });

  var currentTime = new Date();
  var year = currentTime.getFullYear();

  // data for the portfolio cards front and back
  var projectData = [{
      title: 'Solar Swop',
      text: 'Solar Swop is a project that i helped develop the idea was to develop a Crowd FundingEnergy and Peer-to-Peer (P2P) Energy Trading Network through the use of Smart Contracts and ERC20 tokens an early version of the tokens implemented can be found here:<a href="https://github.com/Brianspha/SOLARTOKEN/tree/master/contracts">here</a><br><br> <b>Frameworks used:</b> <i>EmbarkJS, JavaScript, NodeJS,Solidity,Geth, HTML5,CSS,SCSS,JQUERY</i>',

      image: ['img/portfolio/solar.png'],
      site: [
       [ [],
       ]
      ]
    }, {
      title: 'Marijuana POC system',
      text: 'The start up i was freelancing for was tasked on creating a system that uses the Blockchain to track each type of Medical Marijuana seed from the time its planted till it reaches the Supplier we decided to go with Ethereums Blockchain the project has been put on hold because the country is not ready for this kind of system and there are complications with licensing for suppliers (see project early repo:<a href="https://github.com/Brianspha/Supply/tree/master/contracts">here</a>)</p> <br><br> <b>Frameworks used:</b> <i>EmbarkJS, JavaScript, NodeJS,Solidity,Geth, HTML5,CSS,SCSS,JQUERY</i>',

      image: ['img/portfolio/medical.jpg'],
      site: [
        []
      ]
    }, {
      title: 'Blockchain Club',
      text: 'Last year i started a Blockchain Club at my University the main of the Club was to educate students as well as the community of Makhanda about Blockchain and what it means for the African context we met every 2nd week for about 12 weeks at the end of the semester we hosted a Blockmith Blockchain Hackathon see (website: <a href="https://brianspha.github.io/Rhode-Block/">here</a>) The Club was sponsored by ConsenSys and will be continuing with spreading knowledge this year moving foward</p>',

      image: ['img/portfolio/rhodeBlock.png'],
      site: [
        []
      ]
    }
  ];

  // add listener to all the cards for click flipping
  function addListener() {
    var cards = document.querySelectorAll(".card.effect_click");

    for (var i = 0; i < cards.length; i++) {
      clickListener(cards[i]);
    }

    function clickListener(card) {
      card.addEventListener("click", function() {
        this.classList.toggle("flipped");
      });
    }
  }

  // create, populate and show portfolio project cards
  function showProjectCards() {
    var html = '';

    projectData.forEach(function(project) {
      html += '<div class="col-sm-6 col-md-4">';
      html += '<div class="card effect_click"><div class="card_front">';
      html += '<figure><img class="img-responsive" src="' + project.image[0] + '">';
      html += '<figcaption class="project-title">';
      html += project.title;
      html += '</figcaption></figure></div>';

      html += '<div class="card_back"><figure>';
      html += '<div class="project-title">' + project.title + '</div>';
      html += '<figcaption">';
      html += '<div class="project-body">' + project.text + '</div>';
   //   html += '<div><a data-toggle="tooltip" title="' + project.site[0][0] + '" data-placement="top" href="' + project.site[0][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' + project.site[0][1] + '" aria-hidden="true"></i></a>';

      if (typeof project.site[1] !== 'undefined') {
      //  html += '<a data-toggle="tooltip" title="' + project.site[1][0] + '" data-placement="top" href="' + project.site[1][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' + project.site[1][1] + '" aria-hidden="true"></i></a>';
      }

      html += '</div></div>';
      html += '</div>';
      html += '</div>';
    });

    $('#theProjects').append(html);
    addListener();
  }

  showProjectCards();
  $(".copyright").append("<span>© " + year + " Siphamandla Mjoli. All rights reserved</span>");

  // turn on bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

  
});