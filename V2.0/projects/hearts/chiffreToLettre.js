function numbers()
{

	var out = true;
	while(out){

	var chiffreNumber;
	do{
		chiffreNumber = parseInt(prompt('Entrez votre nombre en chiffre entre 0 et 999',));
		if(Number.isNaN(chiffreNumber))
		{
			out = false;
			break;
		}
	}while(chiffreNumber<0||chiffreNumber>999);

	var numbers = ['zero','un','deux','trois','quatre','cinq','six','sept','huit','neuf'];
	var tenNumbers =['dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','quatre-vingts','quatre-vingt-dix'];
	var spetials = ['onze','douze','treize','quatorze','quinze','seize'];
	var textNumber="";
	// Separation of numbers :
	if(chiffreNumber==0)
	{
		textNumber = 'zero';
	}

	var units = chiffreNumber%10;
	var tens = ((chiffreNumber - units)%100)/10;
	var cents = (chiffreNumber-units-tens*10)/100;

	// Cents
	if(cents == 1)
	{
		textNumber = "cent ";
	}
	else if (cents!=0)
	{
		textNumber = numbers[cents] + " cents ";
	}

	// Tens
	var tenNunits = tens*10 + units;
	if (tenNunits>10 && tenNunits<17)
	{
		switch(tenNunits)
		{
			case 11 :
				textNumber += spetials[0];
				break;
			case 12 :
				textNumber += spetials[1];
				break;
			case 13 :
				textNumber += spetials[2];
				break;
			case 14 :
				textNumber += spetials[3];
				break;
			case 15 :
				textNumber += spetials[4];
				break;
			case 16 :
				textNumber += spetials[5];
				break;
		}
		textNumber += ' ';
	}
	else if((tenNunits>90 && tenNunits<100)||tenNunits==81)
	{
		textNumber += quatreVingts(tenNunits);
	}
	else
	{
		if (tens != 0)
			textNumber += tenNumbers[tens-1] + ' ';

		// Units
		if(units == 1 && tens != 0 )
			textNumber += 'et un';
		else if (units != 0)
			textNumber += numbers[units];
	}




	if (out)
		alert(textNumber);

	}
}

	function quatreVingts(tenunits)
	{
		var value;
		switch (tenunits)
		{
			case 81 :
				value = 'quatre-vingt un';
				break;
			case 91 :
				value = 'quatre-vingt onze';
				break;
			case 92 :
				value = 'quatre-vingt douze';
				break;
			case 92 :
				value = 'quatre-vingt treize';
				break;
			case 92 :
				value = 'quatre-vingt quatorze';
				break;
			case 92 :
				value = 'quatre-vingt quinze';
				break;
			case 92 :
				value = 'quatre-vingt seize';
				break;
			case 92 :
				value = 'quatre-vingt dix sept';
				break;
			case 92 :
				value = 'quatre-vingt dix huit';
				break;
			case 92 :
				value = 'quatre-vingt dix neuf';
				break;
		}
		return value;
	}
