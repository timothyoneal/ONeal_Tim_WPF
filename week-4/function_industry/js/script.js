// tim oneal function industry october 24, 2013;

alert("test");

/*converting px to em for responsive web designs by default 1em=16px*/

var pixels=prompt("what is pixel size?");
var defaultOneEm=16;

var ems=calcem(Number(pixels), defaultOneEm);
function calcem(px, dfpx) {
    var ems=px/dfpx;
    return ems;
}

console.log(ems);

if (ems>1) {
    console.log(pixels+" pixels is more then 1 em "+ems+" ems.");    
}else{
    console.log(pixels+" pixels is less than 1 em at "+ems+" ems.");
}

