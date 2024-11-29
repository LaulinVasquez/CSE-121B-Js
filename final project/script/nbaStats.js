// get current date format "dd-mm-yyyy"
let date = new Date();

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

if(month < 10){
    document.getElementById("date").innerHTML = `${day}-0${month}-${year}`;
}else{
  document.getElementById("date").innerHTML = `${day}-${month}-${year}`;
}

let teamList = [];
function output(teamList){
    const html = teamList.map((team)=> 
    `<article>
        <h3>${team.id}</h3><hr>
        <h2>${team.name}</h2>
        <a href="https://www.nba.com/${team.nickname}">
            <img src="${team.logo}" alt="${team.name}" style="height: 30%; width: 30%">
        </a>
        <h4>${team.nickname}</h4>
        <p>${team.code}</p>
        <h3>${team.city}</h3>
    </article>`
    );
    document.getElementById("teams").innerHTML = html.join(" ");
}

//  make the request to the API and then fetch it
const url = 'https://api-nba-v1.p.rapidapi.com/teams';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d0c579fbcmshb6e1f9aff5a12d4p180a17jsn1f215555285d',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

async function getTeams(url){
    let response = await fetch(url,options);
    console.log(response);

    if (response.ok){
        response = await response.json();
        const r = response.response;
        //Here the code will iterate trough each Json object to confirm if there are or not certified nba teams 
        r.forEach(nba => {

            if (nba.nbaFranchise === true){
                teamList.push(nba);
                output(teamList);
            }
        });
    }

}

getTeams(url);

function reset(){
    let articleElements = document.getElementById("teams");

    articleElements.removeChild(articleElements.firstElementChild);
}

let sortSelection = document.getElementById("sortBy");

function sortBy(sortSelection){
    // reset value
    reset();
    // sort NBA team
    let sortList;
    if (sortSelection === "Ascending"){
        sortList = teamList.sort(function(a,b){
            
            if (a.id < b.id) {
                return -1;
            }
            else if (a.id> b.id){
                return 1;
            }
            else{
                return 0;
            }
        })
    }
    else{
        sortList = teamList.sort(function(a,b){
            if (a.id > b.id) {
                return -1;
            }
            else if (a.id < b.id){
                return 1;
            }
            else{
                return 0;
            }
    })
    }
output(sortList);    
}

document.getElementById("sortBy").addEventListener("change", function(e){sortBy(e.target.value) });