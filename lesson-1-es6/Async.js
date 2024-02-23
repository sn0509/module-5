function display(value){
    console.log(value);
}

//cách viết 1//
async function sayHello(){
    return "Hello";
}

//cách viết 2//
function sayHello2(){
    return Promise.resolve("Hello");
}

sayHello().then(
    function (result){
    display(result);
});

