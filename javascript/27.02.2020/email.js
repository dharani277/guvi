
//html

<html lang="en">
<head>
<meta charset="utf-8">
<title></title>
</head>
<body onload='document.form1.text1.focus() && document.form1.Password.focus()'>
<div>
<form name="form1" action="#">
<ul>
</br>enter the email or ph.number:<input type='text' name='text1'/><br>
</br>enter the password:<input type="text" name="Password"></br></br>
<input type="button" name="submit " value="enter to submit" onclick="allnumeric(document.form1.text1,document.form1.Password)" /></br>
</ul>
</form>
</div>
<script src="login.js">
</script>
</body>
</html>

//javascript

function allnumeric(input,a)
   {
      var phnumber= /^[0-9]{10,10}$/;
      var password=/^([a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{7,7})*([!@#\$%\^\&*\)\(+=._-]{1,1})+$/g;
      var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if((input.value.match(phnumber) || input.value.match(email)) && a.value.match(password))
      {
      alert('success');
      document.form1.text1.focus();
      document.form1.Password.focus();
      return true;
      }
      else
      {
      alert(' invalid email and password');
      document.form1.text1.focus();
      document.form1.Password.focus();
      return false;
      }
   } 

