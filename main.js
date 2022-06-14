    //  Exercise 1
for (let i = 0; i < 5   ; i++) {
    document.write("Hello World");
    document.write("<br>")
  }
  document.write("<br>");

    //  Exercise 2
for (let i=1; i<=10 ; i++){
    document.write(i + "<br>")
}
document.write("<br>");

    //  Exercise 3
var num= +prompt("Enter a number to printits multiplication table")
var length= +prompt("Enter length of multiplication table")
for( var i=1; i<=length; i++){
    document.write(num + "*" + i  + "=" + num*i +"<br>" )
}
document.write("<br>");

    //  Exercise 4
var mobile = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

var txt =[];

for(var i=0; i<mobile.length; i++){
    txt =mobile[i] + "<br>";
    document.write(txt)
}
document.write('<br>');
document.write("<br>");

 //     //  Exercise 5

fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    var array ='';
for(var i=0; i<fruits.length; i++){
    array=fruits[i];
    
document.write("<br>"+ array);
}

//      Exercise  7    //

document.write("<h2>Counting : </h2>");
for (var i=1; i<=15;i++) {
    document.write(i + ",");
}

document.write("<h2>Reverse Counting : </h2>");

let num0 = 123456789;
// Function to reverse digits of num
function reverseDigits(num0) {
    let rev_num = 0;
    while(num0 > 0)
    {
        rev_num = rev_num * 10 + num0 % 10;
        num0 = Math.floor(num0 / 10);
    }
    return rev_num;
}
// function call
document.write(reverseDigits(num0) );

document.write('<h2>Even : </h2>');
for (var i = 0 ; i < 20 ; i += 2 ) {
  document.write(i + ",");
}

document.write('<h2>Odd :</h2>');
for (var i = 1 ; i < 21 ; i += 2 ) {
   document.write(i + ",");
}
document.write("<br>");
document.write("<br>");

//      Exercise  9    //

var arr = [24,53,78,91,12];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
        
    }
    
}
document.write("Array items : " + arr + "<br>")
document.write("The largest number is " + largest +"<br>");


//      Exercise  10    //
var array =[24,53,78,91,12];
var minvalue = array[0]; 
for (var i = 0; i < array.length; i++) {
    if(array[i]<minvalue)
    {
        minvalue = array[i];
    }
}
document.write("<br>" +"Array items : " + array + "<br>")
  document.write("The smallest number is " + minvalue);


    //  Exercise    11  //

var numbers = [24,53,78,91,12];

var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0],                      
    largest  = sorted[sorted.length - 1];

document.write("Array items "+ numbers + "<br>");
document.write('The Smallest number is : ' + smallest + "<br>");
document.write('The Largest number is : ' + largest + "<br>");
document.write("<br>")


    //  Exercise    12  //

for (var i=1; i<=20;i++) {
        document.write((i*5) + ",");
    }
document.write("<br>");

    //  Exercise    15  //
    var multiDimArr1 = [
    [1, 2, 3],
    [4,5,6],
    [7,8,9]
];

for (var i = 0; i < multiDimArr1.length; i++){
    document.write("<br /><br />" + multiDimArr1[i].join(" "));
}
document.write("<br>");
document.write("<br>");
    //  Exercise  17    //

for (var x=0; x<=20; x++) {
    if (x === 0) {
            document.write(x +  " is even" + "<br>");
    }
    else if (x % 2 === 0) {
            document.write(x + " is even"+ "<br>");   
    }
    else {
            document.write(x + " is odd"+ "<br>");
    }
}
document.write("<br>");

var m,n;
for(m=1; m <= 5; m++)
{
for(n=1; n<=m; n++)
{
document.write('*');
}
document.write('<br />');
}
document.write('<br />');
document.write('<br />');


var m, n;
for(m=5;m>=1;m--)
{
for(n=1;n<=m;n++)
{
document.write('*');
}
document.write('<br/>');
}