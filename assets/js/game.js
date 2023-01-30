//Game States
//"Win" - Player robot has defeated all enemy-robots
//      *Fight all enemy-robots
//      *Defeat each enemy-robot
//"Lose" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Logging player stats together
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// This creates a function named "fight"
var fight = function(enemyName) {
// Alert players that they are starting the round

while(playerHealth > 0 && enemyHealth > 0) {
    //check if player wishes to fight or not
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");

        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you would like to skip this fight?");

        //if yes, leave fight
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodluck next time!");
            //subtract money for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney ", playerMoney);
            break;
        }
            //if no, ask question again by running fight() again
        else {
            fight();
        }
        
    } 
        //if player chooses to fight, then fight
    else if (promptFight === "fight" || promptFight === "FIGHT") {

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy health
        if(enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
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
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaing")
        };

    //if player chooses to skip
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

//This executes the "fight" function
};

var startGame = function() {

    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {

        //let player know what round they are in
        if (playerHealth > 0) {
            window.alert("Welcome to the Robot Gladiators! Round " + (i + 1) );
        
    
        //pick new enemy to fight based on index
        var pickedEnemyName = enemyNames[i];
        
        //reset enemy health before new round
        enemyHealth = 50;
    
        //use debugger to pause script and check whats going on
        //debugger;
    
        //pass the pickedEnemyName variable's into the fight function
        fight(pickedEnemyName);
        }
        
        else {
            window.alert ("Your robot has fallen in combat! Game Over!");
            break;
        }
    }

    //after the loop ends, player is out of health or enemies, run endGame function
    endGame();

};

//function to end the game
var endGame = function() {
    //if player is still alive, they win
    if (playerHealth > 0 ) {
        window.alert("Great job, your robot has survived the gauntlet! You achieved a final score of " + (playerMoney + playerHealth) + ".");
    }
    else {
        window.alert("Your robot fell without achieving glory in the gauntlet.");
    }

    //ask player if they would like to play again
    var playAgainConfirm = window.confirm ("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thanks for the scrap! Better luck next time in the gauntlet.");
    }
}

//start the game when the page loads
startGame();