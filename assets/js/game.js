var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Logging player stats together
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// This creates a function named "fight"

var fight = function() {
// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

//check if player wishes to fight or not
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

//if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log (
    playerName = " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

//check enemy health
if(enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
}

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack

// Log a resulting message to the console so we know that it worked.};
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

//checks player health
if (playerHealth <= 0 ) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health remaing")
};

//if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");

    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to skip this fight?");

    //if yes, leave fight
    if(confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodluck next time!");
        //subtract money for skipping
        playerMoney = playerMoney - 2;
    }
    //if no, ask question again by running fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");

}

//This executes the "fight" function
};
fight();