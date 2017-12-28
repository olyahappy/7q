1.write a javascript program for factorial?

<!DOCTYPE html>
<html>
 <head>
  <title> Program for factorial </title>
  <script type="text/javascript">                                                                       


function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));
</script>
</head>
</html>

2. write a javascript program for given string is palindrome or not? 

<script>
Function palindrome(str) {
  return true;
}
palindrome("madam Hannah");
</script>

3. write a javascript program for fibnocci series?
<script>
	var number = 10; //how many elements i want to get
	var fibnocci = [0,1] // first two elements
	for (i = 2; i < number; i ++ ) {
		// i is element as summ of previous  two numbers
		fibnocci[i] = fibonacci[i-1] + fibonassi[i-2];
	}
console.log (fibonacci.slice(0,number)); // slice means we cut first number elements if number < 2

</script>

4.Reverse a number without converting to string or without using build in functions ?
<script>
	function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(1234));
</script>

5. write javascript program how to decompress a string such as "a3b3" to "aaabbb"?
<script>
function myFunction(str1)    // extract unique characters from a string.
{
 var str=str1;
 var uniql="aaabbb";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-2)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(myFunction("a3b3"));
</script>

6. Given arry of integers, return if a pair of elements sum to an element in the array(false othervise for example, [1,2,3]=>true  [-2,15,5]=>false)?
<script>
Function arry (arr){
for (var i=0; ,arr.length; i++) {
  for (var j=i+1; j,arr.length;j++){
    if(arr<indexOf(arr[i]+arr[i].-1)){
      return true;
    }
  }
}
return false;
}
console.log(array([2,2,9]));


</script>
7. Write js program for repeating a sring?('abc,3')



<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
function myFunction() {
    var str = "abc";
    document.getElementById("demo").innerHTML = str.repeat(3);
    console.log(myFunction); // i am not sure should i call the function here.
}
</script>

</body>
</html>








