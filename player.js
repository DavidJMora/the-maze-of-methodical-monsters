const player = {
    isAlive: true,
    lastDamageTaken: 0,
    hitPoints: 100,
    level: 1,
    baseAttackDamage: 5,
// Everything above this comment are the base stats for player upon loading the page
// 
// 
    fight: function(enemy) {
        // This pulls the value from any argument with the method of calculateRawDamage
        const rawDamage = enemy.calculateRawDamage();
        // This takes the value of the variable rawDamage and subtracts it from the player's current level and replaces the value in the property of lastDamageTaken
        this.lastDamageTaken = rawDamage - this.level;
        // This variable stores the value of lastDamageTaken subtracted by the player's current hitpoints
        const newHitPoints = this.hitPoints - this.lastDamageTaken;
        // This takes the value of the player's hitpoints and replaces it with the value of newHitPoints
        this.hitPoints = newHitPoints;
        // Once the player's hitpoints fall below or to zero the isAlive property becomes false
        if(this.hitPoints <= 0) {
            this.isAlive = false;
        }
        // Sends the value from the calculatedRawDamage method to an opposing object
        enemy.takeDamage(this.calculateRawDamage());
    },
// This method calculates the raw damage dealt by the player
    calculateRawDamage: function() {
        // This sets the smallest number possible to one
        const min = Math.min(1);
        // This calculates a random number using the variable min and adding four to it then rounding up
        const rawDamage = Math.ceil(Math.random() * (min + 4));
        // This returns the variable rawDamage plus the current value for baseAttackDamage
        return rawDamage + this.baseAttackDamage;
    },
// The following method is applied upon reducing a monsters hitpoints to or below zero
    levelUp: function() {
        // This takes the player's current level and increases it by 1
        this.level = this.level + 1;
        // This takes the player's current hit points and heals them for 30 addition points
        this.hitPoints = this.hitPoints + 30;
        // This resets the lastDamageTaken property back to zero
        this.lastDamageTaken = 0;
        // This increases the player's base power by 20%
        this.baseAttackDamage = Math.floor(this.baseAttackDamage * 1.2);
    }

}
