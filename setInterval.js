count = 5;

function f1() 
{
	if (count === 0) 
    {
		console.log('Happy New Year!');
		clearInterval(interval);
	}
    else 
    {
		console.log(count);
		count -= 1;
	}
}

const interval = setInterval(f1, 1000);
