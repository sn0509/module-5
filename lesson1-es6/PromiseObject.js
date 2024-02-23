function display(value){
    console.log(value);
}

let myPromise = new Promise(function(resolve,reject){
    //producing coe//
    // let x = 4;
    let x = 0;
    
    if(x == 0){
        let sutdent = [
            {id : 1, name : "Tý"},
            {id : 2, name : "Tèo"},
        ]
        resolve(sutdent);
    }else {
        let myError = new Error("404 not found");
        reject (myError);
    }
});

myPromise.then({
    //consuming code//
    function(result) {
        display(JSON.stringify(result));
    },
    function(error){
        display(JSOn.stringify(error));
    },
})

console.log(myPromise);