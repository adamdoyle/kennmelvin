/*
 source  : video.js
 purpose : javascript include file to provide common functions for media player
 author  : kenn melvin
 notes   - provides capability for both netscape and internet-explorer browsers
           not tested in opera, linux or macintosh
*/

/* declare global variables */

var g_Browser;
var g_ImagesLoaded = false;

function myLoad()
{
 /* method called by html body onload event to initialise global variables */
 
 //alert("in load");
 g_Browser = myGetBrowser();
 myLoadGraphics();
}

function myGetBrowser()
{
 if (document.layers) return "Netscape";
 if (document.all) return "InternetExplorer";
 /* test for linux */
}


function myLoadGraphics()
{
 /* preload the menu graphics to enable javascript rollover functions */
 
 if (document.images)
 {
  g_ImagesLoaded = true;
 }
}


function myNavOn(myImage)
{
 if (g_ImagesLoaded) document[myImage].src = eval(myImage+"Off.src");
}

function myNavOff(myImage)
{
 if (g_ImagesLoaded) document[myImage].src = eval(myImage+"On.src");
}


function myChannel(inFile)
{ 
 /* load passed file into the media player object */
 
 var myVideoFile = "../video/" + inFile;
 
 switch (g_Browser) {
   case "Netscape":
     document.NSMediaPlayer.SetFileName(myVideoFile);
     break;
   case "InternetExplorer":
     document.myMediaPlayer.FileName = myVideoFile;
     break;
   default:
     alert("Sorry, video is only tested under Internet Explorer or Netscape browsers");
 }
}

function myStop()
{
 switch (g_Browser) {
   case "Netscape":
     document.NSMediaPlayer.Stop();
     break;
   case "InternetExplorer":
     document.myMediaPlayer.Stop();
     break;
   default:
     alert("Sorry, video is only tested under Internet Explorer or Netscape browsers");
 }
}

function myPlay()
{
 var myPlayer;
 var myVidFile = "";

 switch (g_Browser) {
   case "Netscape":
     myPlayer = document.NSMediaPlayer;
     myVidFile = myPlayer.GetFileName();
     break;
   case "InternetExplorer":
     myPlayer = document.myMediaPlayer;
     myVidFile = myPlayer.filename;
     break;
   default:
     alert("Sorry, video is only tested under Internet Explorer or Netscape browsers");
 }
 if (myVidFile != "") myPlayer.Play(); else alert("Select a film to play first");
}

function myRate(inRate)
{
 var myPlayer;
 switch (g_Browser) {
   case "Netscape":
     myPlayer = document.NSMediaPlayer;
     myPlayer.SetRate(inRate);
     break;
   case "InternetExplorer":
     myPlayer = document.myMediaPlayer;
     myPlayer.Rate = inRate;
     break;
   default:
     alert("Sorry, video is only tested under Internet Explorer or Netscape browsers");
 }
}