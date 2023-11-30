calculateRankLevel(15,10)

function calculateRankLevel(wins, losses){
    let winsLossesDifference = wins - losses
    let level;

    if (wins <= 10){
        level = "Iron"
    }
    else if (wins > 10 && wins <= 20){
        level = "Bronze"
    }
    else if (wins > 20 && wins <= 50){
        level = "Silver"
    }
    else if (wins > 50 && wins <= 80){
        level = "Gold"
    }
    else if (wins > 80 && wins <= 90){
        level = "Diamond"
    }
    else if (wins > 90 && wins <= 100){
        level = "Legendary"
    }
    else {
        level = "Immortal"
    }

    console.log("The Hero has a balance of " + winsLossesDifference + " and is at level " + level)
}