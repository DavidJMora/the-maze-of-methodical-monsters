const monster = {
    hitPoints: 30,
    minHitPoints: 30,
    maxHitPoints: 50,
    lastDamageTaken: 0,
    isAlive: true,
    calculateRawDamage: function() {
        const min = Math.min(1);
        const randomDamage = Math.floor(Math.random() * (min + 5));
        return randomDamage + 2;
    },
    takeDamage: function(rawDamage) {
        const newHitPoints = this.hitPoints - rawDamage;
        this.hitPoints = newHitPoints;
        this.lastDamageTaken = rawDamage;
        if(this.hitPoints <= 0) {
            this.isAlive = false;
        }
    },
    respawn: function() {
        min = Math.ceil(this.minHitPoints);
        max = Math.floor(this.maxHitPoints);
        const newHitPoints = Math.floor(Math.random() * (max - min)) + min;
        this.hitPoints = newHitPoints;
        this.lastDamageTaken = 0;
        this.isAlive = true;
        this.minHitPoints = this.minHitPoints + 5;
        this.maxHitPoints = this.maxHitPoints + 5;
    }
};