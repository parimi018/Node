count = 5

function f1() 
{
    if(count === 0)
        console.log('Happy New Year!');
    else
    {
        console.log(count);
        count -= 1;
    }
}

for(let i=1; i<7; i++)
    setTimeout(f1, i*1000)
