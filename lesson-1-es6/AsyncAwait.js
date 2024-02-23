async function sayHello(){
    let myPromise = new Promise((resolve, reject) => {
        // let x = 0;
        let x = 2;
        if (x==0){
            let sutdents = [
                {id : 1, name : "Tý"},
                {id : 2, name : "Tèo"},
            ];
            resolve(sutdents);
        }else{
            let myError = new Error("404 not found");
            reject(myError);
        }
    });

    let result = await myPromise;
    console.log(result);
}

sayHello();

