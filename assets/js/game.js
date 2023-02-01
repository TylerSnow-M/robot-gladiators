//Game States
//"Win" - Player robot has defeated all enemy-robots
//      *Fight all enemy-robots
//      *Defeat each enemy-robot
//"Lose" - Player robot's health is zero or less

// This creates a function named "fight"
var fight = function(pickedEnemyObj) {
// Alert players that they are starting the round

while(playerInfo.health > 0 && pickedEnemyObj.health > 0) {
    //check if player wishes to fight or not
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    //if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerInfo.name + " has chosen to skip the fight!");

        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you would like to skip this fight?");

        //if yes, leave fight
        if(confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodluck next time!");
            //subtract money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money ", playerInfo.money);
            break;
        }
            //if no, ask question again by running fight() again
        else {
            fight();
        }
        
    } 
        //if player chooses to fight, then fight
    else if (promptFight === "fight" || promptFight === "FIGHT") {

        let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        //Subtract the value of `playerInfo.attack` from the value of `pickedEnemyObj.health` and use that result to update the value in the `pickedEnemyObj.health` variable
        pickedEnemyObj.health = Math.max(0, pickedEnemyObj.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log (
            playerInfo.name + " attacked " + pickedEnemyObj.name + ". " + pickedEnemyObj.name + " now has " + pickedEnemyObj.health + " health remaining."
        );

        //check enemy health
        if(pickedEnemyObj.health <= 0) {
            window.alert(pickedEnemyObj.name + " has died!");
            playerInfo.money = playerInfo.money + 10;
            break;
        }
        else {
            window.alert(pickedEnemyObj.name + " still has " + pickedEnemyObj.health + " health remaining.");
        }

        let enemyDamage = randomNumber (pickedEnemyObj.attack - 3, pickedEnemyObj.attack);

        // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        playerInfo.health = Math.max(0, playerInfo.health - enemyDamage);

        // Log a resulting message to the console so we know that it worked.};
        console.log(
            pickedEnemyObj.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        //checks player health
        if (playerInfo.health <= 0 ) {
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaing")
        };

    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

//This executes the "fight" function
};

var startGame = function() {

    //reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {

        //let player know what round they are in
        if (playerInfo.health > 0) {
            window.alert("Welcome to the Robot Gladiators! Round " + (i + 1) );
        
    
        //pick new enemy to fight based on index
        var pickedEnemyObj = enemyInfo[i];
        
        //reset enemy health before new round
        pickedEnemyObj.health = randomNumber(40,60);
    
        //use debugger to pause script and check whats going on
        //debugger;
    
        //pass the pickedEnemyName variable's into the fight function
        fight(pickedEnemyObj);

        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

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
    if (playerInfo.health > 0 ) {
        window.alert("Great job, your robot has survived the gauntlet! You achieved a final score of " + (playerInfo.money + (playerInfo.health / 2) ) + ".");
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
            playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,

    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },

    refillHealth: function(){
        if(this.money >= 7) {
            window.alert("Need a top up Choom? That'll be 7 BattleBux.");
            this.health += 35;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough cash Choom!");
        }
    },
    
    upgradeAttack: function(){
        if(this.money >= 7) {
            window.alert("Getting some new upgrades Choom? That'll run you 7 Battlebux.")
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("Sorry Choom, you're out of cash.")
        }
    }
};

//Logging player stats together
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },

    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },

    {
        name: "Robo trumble",
        attack: randomNumber(10,14)
    }
];

//generate random damage value based on player's attack power


//start the game when the page loads
startGame();