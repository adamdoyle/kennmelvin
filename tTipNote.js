<!-- source  ; tTipNote.js" -->
<!-- purpose ; javascript code to take user input from html form & format a mail message -->

<!--

function myFormat()
{
 var theForm       = document.myFrm;
 var myDisclaimer  = GetDisclaimer();
 var myBackground  = GetBackground(theForm);
 var myPhysical    = GetPhysical(theForm);
 var mySpecialInfo = GetSpecials(theForm);
 var myQuestion    = GetQuestions(theForm); 
 var mySignature   = GetSignature(theForm);
 
 /* display the information */

 myString = "<p><i>Copy this text with your mouse and paste it into an email to <a href='Mailto:GetACoach@Yahoo.com'>GetACoach@Yahoo.com</a>";
 myString = myString + "<br>You can change or add details using the forms above then hit the Format button again to update this message.</p>" 
 myString = myString + "<table bgcolor='#FFFFEE' width='90%' border='1' cellpadding='2' cellspacing='2'><tr><td>" 
 myString = myString + myBackground + myQuestion;
 myString = myString + "<p>For information...</p>";
 myString = myString + myPhysical + mySpecialInfo + myDisclaimer + mySignature;
 myString = myString + "</td></tr></table>";
 myDiv.innerHTML = myString;
}


function GetDisclaimer()
{
 var myString;
 myString = "<p>I realise that the best way to progress is to get a coach and develop a regular training programme ";
 myString = myString + " and that it is hard to diagnose problems over the Internet without coach and player seeing each other, ";
 myString = myString + " but hope you can help me with my question(s).</p>";
 return(myString);
}


function GetBackground(theForm)
{
 var myName       = theForm.tName.value;
 var myCountry    = theForm.tCountry.value;
 var myAge        = GetRadioValue(theForm.rAge);
 var mySex        = GetRadioValue(theForm.rSex);
 var myYears      = GetRadioValue(theForm.rYears);
 var myExperience = GetCheckBoxes(theForm.cExperience);
 var myString     = "";
 
 /* put it all together */

 myString = "<p>Hi Coach!</p><p>";
 if (myName    != "") myString = myString + "<p>My Name is " + myName;
 if (myCountry != "") myString = myString + " I live in " + myCountry + ".";
 if (mySex     != "") myString = myString + " I'm " + mySex;
 if (myAge     != "") myString = myString + ", aged " + myAge;
 if (myYears   != "") myString = myString + ", been bowling for " + myYears + " years";
 if (myExperience != "") myString = myString + " and I have experience of " + myExperience;
 myString = myString + "</p>";

 return(myString);
}


function GetPhysical(theForm)
{
 var myString   = "";
 var myHand     = GetRadioValue(theForm.rHand);
 var myDrilling = GetRadioValue(theForm.rDrilling);
 var myStyle    = GetRadioValue(theForm.rStyle);
 var mySteps    = GetRadioValue(theForm.rSteps);
 var myAverage  = GetRadioValue(theForm.rAverage);
 var myRevs     = GetRadioValue(theForm.rRevRate);

 myString = "<p>"
 if (myStyle    != "") myString = myString + "I bowl with a " + myStyle + " style.";
 if (myHand     != "") myString = myString + " I'm " + myHand + " handed";
 if (myDrilling != "") myString = myString + " and use a " + myDrilling + " drilling on my bowling ball(s).";
 if (mySteps    != "") myString = myString + " I use a " + mySteps + " step approach,";
 if (myRevs     != "") myString = myString + " my release creates " + myRevs + " revs";
 if (myAverage  != "") myString = myString + " and my average score is about " + myAverage;
 myString = myString + "</p>";

 return (myString);
}


function GetSpecials(theForm)
{
 var myString = "";
 var myLikeMost = theForm.tLikeMost.value;
 var myWorkOn   = theForm.tWorkOn.value;
 var myGoals    = theForm.tGoals.value;
 var myCoach    = GetRadioValue(theForm.rCoach);
 var myInjuries = theForm.tInjury.value;

 myString = "<p>";
 if (myLikeMost != "") myString = myString + "The part of my game I like the most is " + myLikeMost;
 if (myGoals    != "") myString = myString + " My goals are " + myGoals;
 if (myWorkOn   != "") myString = myString + " I'd like to work on " + myWorkOn;
 if (myCoach    != "") myString = myString + " I " + myCoach + " worked with a coach before";
 if (myInjuries != "") myString = myString + " Be aware of my injuries:" + myInjuries;
 myString = myString + "</p>";
 return (myString);
}


function GetQuestions(theForm)
{
 var myString   = "";
 var myQuestion = theForm.sQuestion.value;

 /* make sure they didn't embed any html scripting commands in the message */

 myString = "<p>My question is: <b><i>" + myQuestion + "</i></b></p>";
 return (myString);
}



function GetSignature(theForm)
{
 var myName       = theForm.tName.value;
 var myString     = "";
 
 myString = "<p>Thanks!</p>";
 if (myName != "") myString = myString + "<p>..." + myName + "</p>";

 return(myString);
}


function GetRadioValue(thisGroup)
{
 var i;
 var thisValue;

 thisValue = "";
 for (i=0;i<thisGroup.length;i++)
  { 
   if (thisGroup[i].checked) thisValue = thisGroup[i].value;
  }
 return thisValue;
}


function GetCheckBoxes(thisGroup)
{
 var i;
 var thisValue;
 var numChecked=0;

 thisValue = "";
 for (i=0;i<thisGroup.length;i++)
  {
   if (thisGroup[i].checked)
    {
     numChecked++;
     if (numChecked>1) thisValue = thisValue+", ";
     thisValue = thisValue + thisGroup[i].value;
    }
  }
 return thisValue;
}
// -->