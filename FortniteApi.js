// JavaScript Document
let API_KEY = '68bd132d-2a69fcac-b9cbfd45-ec077a29'
let matchURL = 'https://fortniteapi.io/matches?account='
let statsURL = 'https://fortniteapi.io/stats?account='

let accountURL = 'https://fortniteapi.io/lookup?username='
let usernames = ["Profe_M", "Marilyn577", "A.Dan.17", "Darthnader23", "Darthnader21", "PBNJamin"]
let epicIDs = ['5462e3a4396d4c9ea56008bc1c9d3a22', '9ff7f211fb5a40f7ac8a3d8a7cd6c90c',
    '6f52f2609dfb4878ba6553b303639ae6', '5833220080334037a7f0667eb7a1eb04', 'a297781e606f4a7b9ad36510b47edc3a', '364c2759787c47eb8522de93474ea516'
]
var result = [];
var latestMatchInfo = [];
var obj = {};

var map1 = new Map();
var kills = 0;

//function getPlayerMatchStats() {
//
//for(var i = 0; i < epicIDs.length; i++){
//	fetch(matchURL+epicIDs[i], {
//	method: 'POST',
//	headers: {
//		'Authorization': API_KEY
//	}
//	}
//})
//.then(response => { 
//	return response.json()
//})
//.then(data => {
//	console.log(data)
//		
//		result.push(data)
//		console.log(result[0].name)
//		
////		dict.push({
////			key: data[i].name,
////			value: data[i].matches[0].kills
////		})
//		
//		console.log()
//		
//	})
//		
////}
//
//}


function getChristianData() {
    //get Match Stats
    fetch(matchURL + epicIDs[0], {
            headers: {
                'Authorization': API_KEY
            }
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
                //		map1.set("Chris", [data.name,data.matches[0].kills])
            map1.set("Chris", "M")
            obj["chris"] = data.name
            latestMatchInfo.push({
                    key: data.name,
                    kills: data.matches[0].kills,
                    matchesPlayed: data.matches[0].matchesplayed,
                    minutesPlayed: data.matches[0].minutesplayed,
                    gamePlayed: data.matches[0].readable_name,
                    score: data.matches[0].score,
                    controller: data.matches[0].platform,
                    placeTop1: data.matches[0].placetop1,
                    placeTop3: data.matches[0].placetop3,
                    placeTop5: data.matches[0].placetop5,
                    placeTop6: data.matches[0].placetop6,
                    placeTop10: data.matches[0].placetop10,
                    placeTop12: data.matches[0].placetop12,
                    placeTop25: data.matches[0].placetop25,
                })
                //		main.innerHTML = displayChris()
        })
        // get Player Stats
        //get Search Account ID
}

//var objs = result.map(JSON.parse)
//console.log("var objs")
//console.log(objs)

//function getPlayerStats() {
//	for (var i = 0; i < epicIDs.length; i++){
//	fetch(statsURL+epicIDs[i], {
//		method:'GET',
//		headers: {
//			'Authorization': API_KEY
//		}
//	})
//	.then(response => response.json())
//	.then(json => console.log(json))
//	}
//}
//
//function searchAccountID() {
//	for (var i = 0; i < usernames.length; i++){
//	fetch(accountURL+usernames[i], {
//		method: 'GET',
//		headers: {
//			'Authorization': API_KEY
//		}
//	})
//	.then(response => response.json())
//	.then(json => console.log(json))
//	}
//}

//getPlayerMatchStats()

//getPlayerStats()
//searchAccountID()


function getInformation() {
    getChristianData()
        //	getMarilynData()
        //	getAlexData()
        //	getNathanData()
        //	getBen1Data()
        //	getBen2Data()
    console.log("latestMatchInfo")
    console.log(latestMatchInfo)

    let machinekey = `0`
    let machine = latestMatchInfo[0]

    console.log("OBJ:")
    console.log(obj)

    console.log("OBJ1:")
    console.log(obj)

    if (machine) {
        console.log(`temp is ${machine}: ${machine.key}`);
    }

    //	console.log("map1")
    //	console.log(map1)
    //	console.log(map1.get("Chris"))

    //	console.log("name")
    //	console.log(latestMatchInfo[0].key)
    //	

}



getInformation()