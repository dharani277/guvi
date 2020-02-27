<!DOCTYPE html>
<html>
<head>
<title>Create a div and change the color onmouse over</title>
</head>
<body>
<script src="sample1.js"></script>
</body>
</html>

var d=document.createElement("div");
d.id="img";
d.style.color="violet";
var e=document.createTextNode("To Change the color of the content");
d.appendChild(e);
document.body.appendChild(d);
document.getElementById("img").onmouseover=function(){
mouseover()
};
function mouseover(){
document.getElementById("img").style.color="pink";
}
