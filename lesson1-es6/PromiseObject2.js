const myPromise = new Promise((resolve, reject) => {
    let count = 0;
    let text = setInterval(function(){
        resolve("Hello World");
        count++;
    }, 1000);
});

myPromise.then(function(value){
    console.log(value);
    count++;
});

if(count == 3){
    text = clearInterval;
}