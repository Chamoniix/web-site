const nbHeart = 15;

var i=0;
var j = 1;
var work = false;
var myVar;


function dotD()
{
	var exist;
	if(i<nbHeart)
	{
		if(j)
		{
			var dot = document.createElement('img');
			dot.src = "img/heart.PNG";
			dot.id = i;
			dot.style.width = (100 / nbHeart) + "%";
			document.getElementById("dot").appendChild(dot);
		}
		else
		{
			exist = document.getElementById(i);
			exist.src = "img/heart.PNG";
		}
	}
	else if (i<2*nbHeart)
	{
		exist = document.getElementById(i-nbHeart);
		exist.src = "img/heartPink.PNG";
		if(i==((2*nbHeart)-1))
		{
			i=-1;
			j=0;
		}
	}
	i++;
}

function addHeart()
{
	dotD();
}

function stop()
{
	if(work)
	{
		myVar = setInterval(dotD, 500);
		work = false;
	}
	else
	{
		myVar = 0;
		work = true;
	}
}
