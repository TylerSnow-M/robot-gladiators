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

    //if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");

        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you would like to skip this fight?");

        //if yes, leave fight
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodluck next time!");
            //subtract money for skipping
            playerMoney = Math.max(0, playerMoney - 10);
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

        let damage = randomNumber(playerAttack - 3, playerAttack);

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = Math.max(0, enemyHealth - damage);

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

        let enemyDamage = randomNumber (enemyAttack - 3, enemyAttack);

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = Math.max(0, playerHealth - enemyDamage);

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
        enemyHealth = randomNumber(40,60);
    
        //use debugger to pause script and check whats going on
        //debugger;
    
        //pass the pickedEnemyName variable's into the fight function
        fight(pickedEnemyName);

        if (playerHealth > 0 && i < enemyNames.length - 1) {

            //ask if the player wishes to use the shop before the next fight
            var storeConfirm = window.confirm ("The fight is over, visit the store before the next round?");

            //if yes, take them to the shop() function
            if (storeConfirm){
                shop();
            }
        }

        } else {
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
        window.alert("Great job, your robot has survived the gauntlet! You achieved a final score of " + (playerMoney + (playerHealth / 2) ) + ".");
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

var shop = function() {

    //ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack or LEAVE the store? please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )

    //use switch to carry out choice
    switch (shopOptionPrompt){
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 35 for 7 dollars.");

            //increase health, lower money
            playerHealth = playerHealth + 35;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert ("You don't have enough money! Get back in the Gauntlet to earn more.");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            //increase attack, lower money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert ("You don't have enough money! Get back in the Gauntlet to earn more.");
            }
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store. Goodluck in your next fight!");
            //nothing happens to end function
            break;

        default:
            window.alert("You did not pick a valid option. Try again.")
            //call shop() to force player to pick a valid option
            shop();
            break;
    }

};

//function to generate a random numeric value
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max-min + 1) + min);

    return value;
};

//generate random damage value based on player's attack power


//start the game when the page loads
startGame();