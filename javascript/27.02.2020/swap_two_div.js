// html

<html>
<body>
<div id="x">First</div></br>
<div id="y"> second</div></br>
<input id="sw" onclick="swaping()" type="button" value="enter to swap"/>
<script src="swapp.js">
</script>
</body>
</html>

//javascript

document.getElementById("sw").addEventListener("onclick", onclick);
function swaping()
{
    var s=document.getElementById("x");
    var t=document.getElementById("y");
    var i=s.innerHTML;
    var j=t.innerHTML;
    s.innerHTML=j;
    t.innerHTML=i;
}
