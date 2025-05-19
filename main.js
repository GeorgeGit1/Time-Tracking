fetch('/data.json')
.then((response) => {  
  if(!response.ok) return console.log('Something went wrong.');
  
  return response.json();
}).then((data) => {
  console.log(data);



  

  //   For default




  //Work Category Script

const title = document.getElementById('title');
title.textContent = data[0].title;
const firstCurrent = document.getElementById('firstcurrent');
firstCurrent.textContent = data[0].timeframes.weekly.current+'hrs';
const firstPrevious = document.getElementById('firstprevious');
firstPrevious.textContent = `${data[0].timeframes.weekly.previous + ' - Last Week'}`; 



//Play Category Script

const playTitle = document.getElementById('title2');
playTitle.textContent = data[1].title;
const playCurrent = document.getElementById('current2');
playCurrent.textContent = data[1].timeframes.weekly.current+'hrs';
const playPevious = document.getElementById('previous2');
playPevious.textContent = `${data[1].timeframes.weekly.previous + ' - Last Week'}`; 




//Study Category Script

const studyTitle = document.getElementById('title3');
studyTitle.textContent = data[2].title;
const studyCurrent = document.getElementById('current3');
studyCurrent.textContent = data[2].timeframes.weekly.current+'hrs';
const studyPevious = document.getElementById('previous3');
studyPevious.textContent = `${data[2].timeframes.weekly.previous + ' - Last Week'}`; 



//Exercise Category Script

const exerciseTitle = document.getElementById('title4');
exerciseTitle.textContent = data[3].title;
const exerciseCurrent = document.getElementById('current4');
exerciseCurrent.textContent = data[3].timeframes.weekly.current+'hrs';
const exercisePevious = document.getElementById('previous4');
exercisePevious.textContent = `${data[3].timeframes.weekly.previous + ' - Last Week'}`; 


//Social Category Script

const socialTitle = document.getElementById('title5');
socialTitle.textContent = data[4].title;
const socialCurrent = document.getElementById('current5');
socialCurrent.textContent = data[4].timeframes.weekly.current+'hrs';
const socialPevious = document.getElementById('previous5');
socialPevious.textContent = `${data[4].timeframes.weekly.previous + ' - Last Week'}`; 


//Self-Care Category Script

const selfCareTitle = document.getElementById('title6');
selfCareTitle.textContent = data[5].title;
const selfCareCurrent = document.getElementById('current6');
selfCareCurrent.textContent = data[5].timeframes.weekly.current+'hrs';
const selfCarePevious = document.getElementById('previous6');
selfCarePevious.textContent = `${data[5].timeframes.weekly.previous + ' - Last Week'}`; 













//Daily Stats function

const  btnDay = document.getElementById('day');
btnDay.onclick = function () {


//Work Category Script

const title = document.getElementById('title');
title.textContent = data[0].title;
const firstCurrent = document.getElementById('firstcurrent');
firstCurrent.textContent = data[0].timeframes.daily.current+'hrs';
const firstPrevious = document.getElementById('firstprevious');
firstPrevious.textContent = `${data[0].timeframes.daily.previous + ' - Last Week'}`; 



//Play Category Script

const playTitle = document.getElementById('title2');
playTitle.textContent = data[1].title;
const playCurrent = document.getElementById('current2');
playCurrent.textContent = data[1].timeframes.daily.current+'hrs';
const playPevious = document.getElementById('previous2');
playPevious.textContent = `${data[1].timeframes.daily.previous + ' - Last Week'}`; 




//Study Category Script

const studyTitle = document.getElementById('title3');
studyTitle.textContent = data[2].title;
const studyCurrent = document.getElementById('current3');
studyCurrent.textContent = data[2].timeframes.daily.current+'hrs';
const studyPevious = document.getElementById('previous3');
studyPevious.textContent = `${data[2].timeframes.daily.previous + ' - Last Week'}`; 



//Exercise Category Script

const exerciseTitle = document.getElementById('title4');
exerciseTitle.textContent = data[3].title;
const exerciseCurrent = document.getElementById('current4');
exerciseCurrent.textContent = data[3].timeframes.daily.current+'hrs';
const exercisePevious = document.getElementById('previous4');
exercisePevious.textContent = `${data[3].timeframes.daily.previous + ' - Last Week'}`; 


//Social Category Script

const socialTitle = document.getElementById('title5');
socialTitle.textContent = data[4].title;
const socialCurrent = document.getElementById('current5');
socialCurrent.textContent = data[4].timeframes.daily.current+'hrs';
const socialPevious = document.getElementById('previous5');
socialPevious.textContent = `${data[4].timeframes.daily.previous + ' - Last Week'}`; 


//Self-Care Category Script

const selfCareTitle = document.getElementById('title6');
selfCareTitle.textContent = data[5].title;
const selfCareCurrent = document.getElementById('current6');
selfCareCurrent.textContent = data[5].timeframes.daily.current+'hrs';
const selfCarePevious = document.getElementById('previous6');
selfCarePevious.textContent = `${data[5].timeframes.daily.previous + ' - Last Week'}`; 


//color of text

  btnMonth.style.color = '#7078C9';
  btnDay.style.color =  '#ffff';
  btnWeek.style.color = '#7078C9'; 
 



}



// Weakly Stats Function

const  btnWeek = document.getElementById('week');
btnWeek.onclick = function () {


//Work Category Script

const title = document.getElementById('title');
title.textContent = data[0].title;
const firstCurrent = document.getElementById('firstcurrent');
firstCurrent.textContent = data[0].timeframes.weekly.current+'hrs';
const firstPrevious = document.getElementById('firstprevious');
firstPrevious.textContent = `${data[0].timeframes.weekly.previous + ' - Last Week'}`; 



//Play Category Script

const playTitle = document.getElementById('title2');
playTitle.textContent = data[1].title;
const playCurrent = document.getElementById('current2');
playCurrent.textContent = data[1].timeframes.weekly.current+'hrs';
const playPevious = document.getElementById('previous2');
playPevious.textContent = `${data[1].timeframes.weekly.previous + ' - Last Week'}`; 




//Study Category Script

const studyTitle = document.getElementById('title3');
studyTitle.textContent = data[2].title;
const studyCurrent = document.getElementById('current3');
studyCurrent.textContent = data[2].timeframes.weekly.current+'hrs';
const studyPevious = document.getElementById('previous3');
studyPevious.textContent = `${data[2].timeframes.weekly.previous + ' - Last Week'}`; 



//Exercise Category Script

const exerciseTitle = document.getElementById('title4');
exerciseTitle.textContent = data[3].title;
const exerciseCurrent = document.getElementById('current4');
exerciseCurrent.textContent = data[3].timeframes.weekly.current+'hrs';
const exercisePevious = document.getElementById('previous4');
exercisePevious.textContent = `${data[3].timeframes.weekly.previous + ' - Last Week'}`; 


//Social Category Script

const socialTitle = document.getElementById('title5');
socialTitle.textContent = data[4].title;
const socialCurrent = document.getElementById('current5');
socialCurrent.textContent = data[4].timeframes.weekly.current+'hrs';
const socialPevious = document.getElementById('previous5');
socialPevious.textContent = `${data[4].timeframes.weekly.previous + ' - Last Week'}`; 


//Self-Care Category Script

const selfCareTitle = document.getElementById('title6');
selfCareTitle.textContent = data[5].title;
const selfCareCurrent = document.getElementById('current6');
selfCareCurrent.textContent = data[5].timeframes.weekly.current+'hrs';
const selfCarePevious = document.getElementById('previous6');
selfCarePevious.textContent = `${data[5].timeframes.weekly.previous + ' - Last Week'}`; 


//color of text

   btnMonth.style.color = '#7078C9';
  btnDay.style.color =  '#7078C9';
  btnWeek.style.color =  '#ffff';
 

  
}




// monthly Stats Function

const  btnMonth = document.getElementById('month');
btnMonth.onclick = function () {


//Work Category Script

const title = document.getElementById('title');
title.textContent = data[0].title;
const firstCurrent = document.getElementById('firstcurrent');
firstCurrent.textContent = data[0].timeframes.monthly.current+'hrs';
const firstPrevious = document.getElementById('firstprevious');
firstPrevious.textContent = `${data[0].timeframes.monthly.previous + ' - Last Week'}`; 



//Play Category Script

const playTitle = document.getElementById('title2');
playTitle.textContent = data[1].title;
const playCurrent = document.getElementById('current2');
playCurrent.textContent = data[1].timeframes.monthly.current+'hrs';
const playPevious = document.getElementById('previous2');
playPevious.textContent = `${data[1].timeframes.monthly.previous + ' - Last Week'}`; 




//Study Category Script

const studyTitle = document.getElementById('title3');
studyTitle.textContent = data[2].title;
const studyCurrent = document.getElementById('current3');
studyCurrent.textContent = data[2].timeframes.monthly.current+'hrs';
const studyPevious = document.getElementById('previous3');
studyPevious.textContent = `${data[2].timeframes.monthly.previous + ' - Last Week'}`; 



//Exercise Category Script

const exerciseTitle = document.getElementById('title4');
exerciseTitle.textContent = data[3].title;
const exerciseCurrent = document.getElementById('current4');
exerciseCurrent.textContent = data[3].timeframes.monthly.current+'hrs';
const exercisePevious = document.getElementById('previous4');
exercisePevious.textContent = `${data[3].timeframes.monthly.previous + ' - Last Week'}`; 


//Social Category Script

const socialTitle = document.getElementById('title5');
socialTitle.textContent = data[4].title;
const socialCurrent = document.getElementById('current5');
socialCurrent.textContent = data[4].timeframes.monthly.current+'hrs';
const socialPevious = document.getElementById('previous5');
socialPevious.textContent = `${data[4].timeframes.monthly.previous + ' - Last Week'}`; 


//Self-Care Category Script

const selfCareTitle = document.getElementById('title6');
selfCareTitle.textContent = data[5].title;
const selfCareCurrent = document.getElementById('current6');
selfCareCurrent.textContent = data[5].timeframes.monthly.current+'hrs';
const selfCarePevious = document.getElementById('previous6');
selfCarePevious.textContent = `${data[5].timeframes.monthly.previous + ' - Last Week'}`; 


//color of text

  btnMonth.style.color = '#ffff';
  btnDay.style.color =  '#7078C9';
  btnWeek.style.color = '#7078C9';


  
}



});





