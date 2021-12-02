let gallo ={
    name:gallo,
    age:19,
    fillname:function(){
    return this;
    }
};



let maiale ={
    name:maiale,
    age:19,
    fillname:function(){
    return this;
    }
};



let mucca ={
    name:mucca,
    age:19,
    fillname:function(){
    return this;
    }
};

function buttonFunction1(){
    document.getElementById("mytext").innerHTML=gallo.name+" "+gallo.age;
}
function buttonFunction(){
    document.getElementById("demo").innerHTML=maiale.name+"  "+maiale.age;

}
function buttonFunction2(){
     document.getElementById("ciao").innerHTML=mucca.name+"   "+mucca.age;

}

