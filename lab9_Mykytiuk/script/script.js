function setIntervalAnimation() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      document.getElementById("train").style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }

  function animate({duration, draw, timing}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }
function structureAnimation() {
    let elem = document.getElementById('structure-animation__elem');
    animate({
        duration: 1000,
        timing: function(timeFraction) {
            return timeFraction;
        },
        draw: function(progress) {
            elem.style.width = progress * 100 + '%';
        }
    });
};

// timing functions
function quad(timeFraction) {
    return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
}
function back(x, timeFraction) {
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}
function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}
function elastic(x, timeFraction) {
    return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
}

function powerAnimation() {
    let elem = document.getElementById('power-animation__brick');
    animate({
        duration: 1000,
        timing: quad,
        draw: function(progress) {
            elem.style.left = progress * 500 + 'px';
        }
    });
}
function circAnimation() {
    let elem = document.getElementById('circ-animation__brick');
    animate({
        duration: 1000,
        timing: circ,
        draw: function(progress) {
            elem.style.left = progress * 500 + 'px';
        }
    });
}
function backAnimation() {
    let elem = document.getElementById('back-animation__brick');
    animate({
        duration: 1000,
        timing: back.bind(null, 1.5),
        draw: function(progress) {
            elem.style.left = progress * 500 + 'px';
        }
    });
}
function bounceAnimation() {
    let elem = document.getElementById('bounce-animation__brick');
    animate({
        duration: 3000,
        timing: bounce,
        draw: function(progress) {
            elem.style.left = progress * 500 + 'px';
        }
    });
}
function elasticAnimation() {
    let elem = document.getElementById('elastic-animation__brick');
    animate({
        duration: 3000,
        timing: elastic.bind(null, 1.5),        
        draw: function(progress) {
            elem.style.left = progress * 500 + 'px';
        }
    });
}
function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}
function easeOutAnimation() {
    let elem = document.getElementById('easeOut-animation__brick');
    animate({
        duration: 3000,
        timing: makeEaseOut(bounce),
        draw: function(progress) {
            elem.style.left = progress * 500 + 'px';
        }
    });
}
function makeEaseInOut(timing) {
    return function(timeFraction) {
      if (timeFraction < .5)
        return timing(2 * timeFraction) / 2;
      else
        return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
  }
function easeInOutAnimation() {
    let elem = document.getElementById('easeInOut-animation__brick');
    animate({
        duration: 3000,
        timing: makeEaseInOut(bounce),
        draw: function(progress) {
            elem.style.left = progress * 500 + 'px';
        }
    });
}
function animateText(textArea) {
    let text = textArea.value;
    let to = text.length,
      from = 0;

    animate({
      duration: 5000,
      timing: bounce,
      draw: function(progress) {
        let result = (to - from) * progress + from;
        textArea.value = text.slice(0, Math.ceil(result))
      }
    });
  }