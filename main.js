

let user={

};

function sayHigh(){
    console.log("hello");
}

user.hello = sayHigh;
user.hello();


let mySelf={
    name: "khato",
    sirname: "kldiashvili"
}


mySelf.introduce=function(){
    console.log("hello my name is: " + mySelf.name + " " + mySelf.sirname)
    console.log(this.name);
}

mySelf.introduce();


let user1={
    introduse: function(){
        console.log("my name is khato");

    }
}













