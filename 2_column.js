function validateContact()
 {		var name = document.forms["form1"]["name"].value;
		var email = document.forms["form1"]["email"].value;
		var msg = document.forms["form1"]["msg"].value;
	    var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
	 if(!isNaN(name) || (name==""))           // name is Not a Number & name should not be blank
    		{
				document.getElementById("msg1").innerHTML="Please enter the valid name";
				return false;
			}
			
		else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
		{
		document.getElementById("msg1").innerHTML = "Not a valid e-mail address";
		return false;

        }
		else if(msg=="")           //msg should not be blank
    		{
				document.getElementById("msg1").innerHTML = "Please enter your message";
				return false;
			}
		
		alert("Form submitted successfully");
		//document.getElementById("msg1").innerHTML = "Form submitted successfully";
}


