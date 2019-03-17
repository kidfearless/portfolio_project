"use strict"

window.addEventListener("load", 
	function()
	{
		var myForm = document.forms[0];
		myForm.elements.firstName.oninput = validateFirstName;
		myForm.elements.lastName.oninput = validateLastName;
		myForm.elements.contact_email.oninput = validateEmail;
		myForm.elements.contact_reason.onchange = validateReason;
		myForm.elements.contact_submit.onclick = validateAll;
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
	/* Check to see if it's a valid range */
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
	var myFirstName = document.forms[0].elements.firstName;
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
	var myLastName = document.forms[0].elements.lastName;
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

function validateAll()
{
	validateFirstName();
	validateLastName();
	validateEmail();
	validateReason(); 
}