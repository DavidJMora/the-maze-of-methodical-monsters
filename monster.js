const monster = {
    hitPoints: 30,
    minHitPoints: 30,
    maxHitPoints: 50,
    lastDamageTaken: 0,
    isAlive: true,
    baseDamage: 2,
// Everything above this comment are the base stats for the monsters
// 
// Method designed to calculate a damage output to be subtracted from player's hitpoints
    calculateRawDamage: function() {
        // Sets minimum value to one
        const min = Math.min(1);
        // Randomizes a number between the values of one and six and rounds down to the nearest integer
        const randomDamage = Math.floor(Math.random() * (min + 5));
        // returns the value of randomDamage and adds it to the current value of baseDamage
        return randomDamage + this.baseDamage;
    },
// This method takes the information sent to it from player and applies it as damage accordingly
    takeDamage: function(rawDamage) {
        // Variable newHitPoints takes monster's current hitpoints and subtracts damage done by player
        const newHitPoints = this.hitPoints - rawDamage;
        // hitPoints then sets the value of newHitPoints as the monster's current hitpoint value
        this.hitPoints = newHitPoints;
        // Replaces old value with current value of damage taken
        this.lastDamageTaken = rawDamage;
        // When monster's hitpoints falls to zero or below change isALive to false
        if(this.hitPoints <= 0) {
            this.isAlive = false;
        }
    },
// This method takes effect once the player has reduced the monster's hitpoints to zero or less
    respawn: function() {
        // Pulls current value in minHitPoints and rounds to the next highest integer
        min = Math.ceil(this.minHitPoints);
        // Pulls current value in maxHitPoints and rounds down to the next lowest integer
        max = Math.floor(this.maxHitPoints);
        // Generates a randomized number between the max and min then rounds down to the next lowest integer
        const newHitPoints = Math.floor(Math.random() * (max - min)) + min;
        // Sets the value of hitPoints to the value randomized by the variable newHitPoints
        this.hitPoints = newHitPoints;
        // Resets lastDamagetaken back to zero
        this.lastDamageTaken = 0;
        // Resets isAlive back to true
        this.isAlive = true;
        // Increases minHitPoints by five after each death to increase difficulty
        this.minHitPoints = this.minHitPoints + 5;
        // Increases maxHitPoints by five after each death to increase difficulty
        this.maxHitPoints = this.maxHitPoints + 5;
        // Increases baseDamage by 20% rounded up to the next highest integer
        this.baseDamage = Math.ceil(this.baseDamage * 1.2);
    }
};