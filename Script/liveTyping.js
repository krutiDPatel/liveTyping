//Changing BackGround Image on Click
function changeBg(param) {

    let wedbg =  document.getElementById('wedBG');
  
    if(param == "style1") {
      wedbg.style.backgroundImage = 'url("images/style1.jpeg")';
      document.getElementById("disWedDate").style.color = "maroon";
      document.getElementById("displayGroom").style.color = "maroon";
    }
  
    if(param == "style2") {
      wedbg.style.backgroundImage = 'url("images/style2.jpeg")';
      document.getElementById("disWedDate").style.color = "black";
      document.getElementById("displayGroom").style.color = "black";
    }
  
    if(param == "style3") {
      wedbg.style.backgroundImage = 'url("images/style3.jpeg")';
      document.getElementById("disWedDate").style.color = "white";
      document.getElementById("displayGroom").style.color = "white";
    }
}


//Displaying Date on change event
function displayDate() {

    let dateVal = document.getElementById("weddingDate").value;
    
    let disDateVal = document.getElementById("disWedDate");
  
    disDateVal.innerText = dateVal;
  
}

//Live Typing Reflection on input witth keyup event
function writeName() {

    let groomName = document.getElementById('groomName').value;

    //console.log(groomName);
    
    document.getElementById("displayGroom").innerText = groomName;
}