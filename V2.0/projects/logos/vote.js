if (y1==undefined)
  var y1, y2, y3, y4, y5;


  function clean() {

    var mdp = prompt('mot de passe administateur :',);
    if (mdp == auth)
      localStorage.clear();
    else
      alert("Bad password");
  }

function vote1() {
    y1 = localStorage.getItem("score1");
    y1++;
    localStorage.setItem("score1", y1);
}

function vote2() {
  y2 = localStorage.getItem("score2");
  y2++;
  localStorage.setItem("score2", y2);
}

function vote3() {
  y3 = localStorage.getItem("score3");
  y3++;
  localStorage.setItem("score3", y3);
}

function vote4() {
  y4 = localStorage.getItem("score4");
  y4++;
  localStorage.setItem("score4", y4);
}

function vote5() {
  y5 = localStorage.getItem("score5");
  y5++;
  localStorage.setItem("score5", y5);
}

y1 = localStorage.getItem("score1");
y2 = localStorage.getItem("score2");
y3 = localStorage.getItem("score3");
y4 = localStorage.getItem("score4");
y5 = localStorage.getItem("score5");

document.getElementById("panelScore1").textContent = y1;
document.getElementById("panelScore2").textContent = y2;
document.getElementById("panelScore3").textContent = y3;
document.getElementById("panelScore4").textContent = y4;
document.getElementById("panelScore5").textContent = y5;

var nbLogo = 5;
var tab = [y1, y2, y3, y4,y5];
var max=0;
for (var i=0; i<nbLogo; i++)
  if (tab[i]>max)
    max = tab[i];
var u = max%10;
var ymax = (max - u) + 10;

new Chartist.Bar('.ct-chart', {
  labels: ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5'],
  series: [
    tab
  ]
}, {
  stackBars: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value);
    }
  },
  high: ymax,
  low: 0
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 30px'
    });
  }
});
