
function MakeOwnArr(){
    function Chain(value){
        this.prev=null;
        this.next=null;
        this.value=value;
    }

    this.length=0;
    let startChain=null;
    let endChain=null;
   
    this.push=function(value){
        let chain=new Chain(value);
        if(startChain === null){
            startChain=chain;
            endChain=chain;
        }else{
            endChain.next=chain;
            chain.prev=endChain;
            endChain=chain;
        }
        length++;
    }

    this.unshift=function(value){
        let chain=new Chain(value);
        if(startChain === null){
            startChain=chain;
            endChain=chain;
        }else{
            startChain.prev=chain;
            chain.next=startChain;
            startChain=chain;
        }
        length++
    }
    
    this.forEach=function(func){
        let start=startChain;
        let index=0;
        while(start!=null){
            func(start.value,index);
            start=start.next;
            index++
        }
    }

    this.forEachrev=function(fun){
        let endVal=endChain;
        let index=length-1;
        while(endVal!=null){
            fun(endVal.value,index);
            endVal=endVal.prev;
            index--;
        }
    }

    this.pop=function(){
        if(length==1){
            endChain=null;
            startChain=null;
        }else if(endChain !=null && length > 1){
            endChain=endChain.prev;
            endChain.next=null;
            endChain=null;
        }
        length--;
        if(endChain==null && startChain==null){
            length = 0;
        }

        }

    

   this.shift=function(){
    if(length==1){
        endChain=null;
        startChain=null;
    }else if(startChain!=null && length > 1){
        startChain=startChain.next;
        startChain.prev=null;
        startChain=null;
       }
       length--;
       if(endChain==null && startChain==null){
        length = 0;
        }
   }
   
   this.toArray=function(){
        let arr=[];
        list.forEach(e => arr.push(e));
        return arr;
        } 
       
   
}

  

let list = new MakeOwnArr();


list.push(4);
list.push(5);
list.push(6);
list.unshift(3);
list.unshift(2);
list.unshift(1);

//list.pop();
/* list.pop();
list.pop();
list.pop();
list.pop(); */

//list.shift();
/* list.shift();
list.shift();
list.shift();
list.shift();
list.shift(); */

/* list.push(4);
list.pop();
list.pop();
list.pop(); */

/* list.unshift(4);
list.shift();
list.shift(); */

/* list.unshift(9);
list.pop(); */

/* list.push(7);
list.shift(); */

გიტlist.forEach((e,i) => console.log(e + " " + "index is: " + i));
console.log("LET TRY REVERSE!!");
list.forEachrev((el,i) => console.log(el + " " + "index is: " + i));
console.log(this.length);
console.log(list.toArray());

