/*
 source  : scorer.js
 purpose : javascript source for the bowling scoring program
 author  : kenn melvin
*/

var navVersion = navigator.appVersion;
var navName    = navigator.appName;
var ie4        = ((navName=="Microsoft Internet Explorer") && (parseInt(navVersion)>=4));
var ns4        = ((navName=="Netscape") && (parseInt(navVersion)>=4));
var aStrike         = 10;
var aSpare          = 10;
var gLevel          = 1;
var FirstBallArray  = new Array(10);
var SecondBallArray = new Array(10);
var FinalBonusBall;

function isStrike(pinsDown)
 {
  if (pinsDown==aStrike) return true; else return false;
 }

function isSpare(pinsDown)
 {
  if (pinsDown==aSpare) return true; else return false;
 }

function ShowScore(theFrame,theScore)
 {
  ScoreSheet.rows[2].cells[theFrame].innerText=theScore;
 }

function PaintCell (row,cell,str)
 {
  ScoreSheet.rows[row].cells[cell].innerText=str;
  ScoreSheet.rows[1].cells[cell].backgroundColor="Navy";
 }

function PaintFrame(FrameNo)
 {
  var PinsOn1stBall;
  var PinsOn2ndBall;
  var allPins;
  var j;
 
  //-- dont show the computed score until user hits the score button
   
  ShowScore(FrameNo,'--');
  
  //-- find out where we are & how many pins we hit
  
  j = (FrameNo-1)*2+1;
 
  PinsOn1stBall = FirstBallArray[FrameNo];
  PinsOn2ndBall = SecondBallArray[FrameNo];
 
  //-- display this frame

  if (PinsOn1stBall==aStrike)
   {
    PaintCell(1,j,"X");
    PaintCell(1,j+1,"");
    if (PinsOn2ndBall==aStrike)
     {
      PaintCell(1,j+1,"X");
      if (FinalBonusBall==aStrike) PaintCell(1,j+2,"X"); else PaintCell(1,j+2,FinalBonusBall);
     }
    else
     {
      if (FrameNo==10)
       {
        PaintCell(1,j+1,PinsOn2ndBall);
        if ((PinsOn2ndBall+FinalBonusBall)==aSpare) PaintCell(1,j+2,"/"); else PaintCell(1,j+2,FinalBonusBall);
       }
     }
   }
  else
   {
    PaintCell(1,j,PinsOn1stBall);
    allPins = PinsOn1stBall + PinsOn2ndBall;
    if (allPins==aSpare) 
     {
      PaintCell(1,j+1,"/"); 
      if (FrameNo==10)
       {
        PaintCell(1,j+2,FinalBonusBall);
       }
     }
    else 
     {
      PaintCell(1,j+1,PinsOn2ndBall);
      PaintCell(1,j+2,"");
     }
   }

 }

function Generate(PinsAlreadyDown)
 {
  // simulate a bowler throwing a ball
  // most we scan score is 10 pins, or less if some pins already down (on first ball)
  // we incorporate the bowlers chosen "level" of ability into this equation

  var maxPins;

  maxPins = 10 - PinsAlreadyDown;
  x = Math.round(Math.random()*maxPins*gLevel);
  if (x>maxPins) {x=maxPins};
  return x;
 }


function PlayFrame(theFrame)
 {
  var myFirstBall;
  var myNextBall;
  var PinsLeft;

  if (theFrame < 10) 
   {
    //
    //-- compute a 1st & 2nd score 
    //
    myFirstBall = Generate(0);
    myNextBall  = Generate(myFirstBall);
    FirstBallArray[theFrame] = myFirstBall;
    SecondBallArray[theFrame] = myNextBall;
   }
  else
   {
    // -- special handling for 10th frame
    //
    myFirstBall = Generate(0);
    FirstBallArray[theFrame] = myFirstBall;
    if (isStrike(myFirstBall))
     {
      myNextBall = Generate(0);
     }
    else
     {
      myNextBall = Generate(myFirstBall);
     }
    SecondBallArray[theFrame] = myNextBall;
    //
    //-- check for final ball bonus
    //
    FinalBonusBall=0;
    if ((myFirstBall+myNextBall)>=10)
     {
      if (myNextBall==aStrike) FinalBonusBall = Generate(0); else FinalBonusBall = Generate(myNextBall);
     }
   }
 }


function PlayGame()
 {
  var thisFrame;
  var maxFrames = 10;

  if (!ie4)
   {
    alert("I'm very sorry, but I haven't quite got this going in Netscape yet");
   } 
  else
   {
    thisFrame =1;
    while (thisFrame <= maxFrames)
     {
      PlayFrame(thisFrame);
      PaintFrame(thisFrame);
      thisFrame = thisFrame+1;
     }
   } 
 }

function SetName(aName)
{
 ScoreSheet.rows[1].cells[0].innerText=aName;
}

function SetLevel(theVal)
 {
  // this script by onclick property of the radio buttons
  // we set the global variable level (used to generate scores) & set name on scoresheet 
  gLevel = theVal
  if (gLevel==1) SetName("Beginner");
  if (gLevel==2) SetName("Intermediate");
  if (gLevel==3) SetName("Advanced");
 }

function ResetGame()
 {
  for (i=1; i<=10;i++)
   {
    FirstBallArray[i] = 0;
    SecondBallArray[i] = 0;
    PaintFrame (i,0,0);  
    ShowScore(i,"--");
   }
  FinalBonusBall=0;
 }


function ScoreGame()
{
 var theScore;

 theScore=0;
 for (i=1; i<10;i++)
  {
   PinsInThisFrame = FirstBallArray[i]+SecondBallArray[i];
   theScore = theScore + PinsInThisFrame;
  
   if (isStrike (FirstBallArray[i]))
    {
     theScore = theScore + FirstBallArray[i+1] + SecondBallArray[i+1];
     if (isStrike (FirstBallArray[i+1]))
       {
        if (i<9) theScore = theScore + FirstBallArray[i+2];
       }
    }
   else 
    {
     if (isSpare(PinsInThisFrame)) theScore = theScore + FirstBallArray[i+1];
    }
   ShowScore(i,theScore);
  }
  // work out final frame score then display the score

  theScore = theScore + FirstBallArray[10] + SecondBallArray[10] + FinalBonusBall;
  ShowScore(i,theScore);
}
