"use strict";

window.addEventListener("load", 
	function()
	{
		var myForm = document.forms[0];
		myForm.elements.contact_first_name.oninput = validateFirstName;
		myForm.elements.contact_last_name.oninput = validateLastName;
		myForm.elements.contact_email.oninput = validateEmail;
		myForm.elements.contact_reason.onchange = validateReason;
		myForm.elements.contact_submit.onclick = function()
		{
			validateFirstName();
			validateLastName();
			validateEmail();
			validateReason(); 
		};
		myForm.onsubmit = function()
		{
			if(this.checkValidity())
			{
				alert("We appreciate your feedback, and will reach out to you shortly!");
				return false;
			}
		};
	}
);

function validateEmail()
{
	var myEmail = document.forms[0].elements.contact_email;
	/* check for it's existence */
	if(myEmail.validity.valueMissing === true)
	{
		myEmail.setCustomValidity("Enter your email address");
	}
	/* Check to see if it's a valid email */
	else if( (/^(([a-zA-Z]+\d*)\.*)+@((\w+)\.?)+\.([a-zA-Z]){2,3}$/).test(myEmail.value) === false )
	{
		myEmail.setCustomValidity("Enter a valid email address");
	}
	/* reset the validity if the other checks pass */
	else
	{
		myEmail.setCustomValidity("");
	}
}

function validateFirstName()
{
	var myFirstName = document.forms[0].elements.contact_first_name;
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
	var myLastName = document.forms[0].elements.contact_last_name;
	if (myLastName.validity.valueMissing)
	{
		myLastName.setCustomValidity("Please include your last name.");
	}
	else
	{
		myLastName.setCustomValidity("");
	}
}

function validateReason()
{
	var myReason = document.forms[0].elements.contact_reason;
	if(myReason[0].selected === true)
	{
		myReason.setCustomValidity("Please include your reason for contacting us.");
	}
	else
	{
		myReason.setCustomValidity("");
	}
}

