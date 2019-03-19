"use strict";

window.addEventListener("load", 
	function()
	{
		var myForm = document.forms[0];
		myForm.elements.news_first_name.oninput = validateFirstName;
		myForm.elements.news_last_name.oninput = validateLastName;
		myForm.elements.news_email.oninput = validateEmail;
		myForm.elements.news_submit.onclick = function()
		{
			validateFirstName();
			validateLastName();
			validateEmail();
		};
		myForm.onsubmit = function()
		{
			if(this.checkValidity())
			{
				alert("Check your inbox for more amazing deals!");
				return false;
			}
		};
	}
);
function validateEmail()
{
	var myEmail = document.forms[0].elements.news_email;
	/* check for it's existence */
	if(myEmail.validity.valueMissing === true)
	{
		myEmail.setCustomValidity("Please enter your email address");
	}
	/* Check to see if it's a valid email */
	else if( (/^(([a-zA-Z]+\d*)\.*)+@((\w+)\.?)+\.([a-zA-Z]){2,3}$/).test(myEmail.value) === false )
	{
		myEmail.setCustomValidity("Please enter a valid email address");
	}
	/* reset the validity if the other checks pass */
	else
	{
		myEmail.setCustomValidity("");
	}
}

function validateFirstName()
{
	var myFirstName = document.forms[0].elements.news_first_name;
	if (myFirstName.validity.valueMissing)
	{
		myFirstName.setCustomValidity("Please include your first name.");
	}
	else
	{
		myFirstName.setCustomValidity("");
	}
}

function validateLastName()
{
	var myLastName = document.forms[0].elements.news_last_name;
	if (myLastName.validity.valueMissing)
	{
		myLastName.setCustomValidity("Please include your last name.");
	}
	else
	{
		myLastName.setCustomValidity("");
	}
}