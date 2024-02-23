let message = setInterval(saySomething, 3000);
let count = 0;

function saySomething(){
    console.log("Welcome to JS");
    count ++
    if(count == 10){
        clearInterval(message);
    }
}