// Question 1
function describeValue(value) {
    let result = typeof value + (value ? " | truthy" : " | falsy");
    return result;
}




// Question 2
function getDayType(day){
    const cDay = day[0].toUpperCase() + day.slice(1).toLowerCase();

    switch(cDay){
        case "Friday":
        case "Saturday":
            return "Weekend";
            break;
        case "Sunday":
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
            return "Working Day";
            break;
        default:
            return "Invalid Day";
    }
}





// Question 3
function validateUsername(username){
    const userName = username.toLowerCase();

    if(userName.length < 4){
        return "Too Short";
    } else if(userName.includes(" ")){
        return "No Space Allowed";
    } else if(userName.includes("admin")){
        return "Reserved Word";
    } else {
        return "Available";
    }
}





// Question 4
function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare;

    if(distance <= 2){
        fare = 50;
    } else{
        fare = 50 + (distance-2) * 15;
    }

    fare = fare + waitingMinutes * 2;

    if(isNight == true){
        fare = fare + (fare * 0.2);
    }
    
    return fare;
}




// Question 5
const getChaseVerdict = (target, scored, ballsLeft) =>{
    let runsNeeded = target - scored;

    if(runsNeeded <= 0){
        return "Won";
    } else if(ballsLeft <= 0){
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;

    if(requiredRate <= 6){
        verdict = "Comfortable";
    } else if(requiredRate <= 12){
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;

};
