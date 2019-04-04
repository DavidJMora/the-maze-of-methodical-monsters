const player = {
    isAlive: true,
    fight: function(enemy) {
        rawDamage = enemy.calculateRawDamage();
        this.lastDamageTaken = rawDamage - this.level;
        const newHitPoints = this.hitPoints - rawDamage;
        this.hitPoints = newHitPoints;
        if(this.hitPoints <= 0) {
            this.isAlive = false;
        }
    },
    calculateRawDamage: function() {
        const min = Math.min(1);
        const randomDamage = Math.ceil(Math.random() * (min + 4));
        return randomDamage;
    },
    lastDamageTaken: 0,
    hitPoints: 100,
    level: 1,

}
