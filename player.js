const player = {
    isAlive: true,
    lastDamageTaken: 0,
    hitPoints: 100,
    level: 1,

    fight: function(enemy) {
        rawDamage = enemy.calculateRawDamage();
        this.lastDamageTaken = rawDamage - this.level;
        const newHitPoints = this.hitPoints - rawDamage;
        this.hitPoints = newHitPoints;
        if(this.hitPoints <= 0) {
            this.isAlive = false;
        }
        enemy.takeDamage(this.calculateRawDamage());
    },

    calculateRawDamage: function() {
        const min = Math.min(1);
        const rawDamage = Math.ceil(Math.random() * (min + 4));
        return rawDamage;
    },

    levelUp: function() {
        this.level = this.level + 1;
        this.hitPoints = this.hitPoints + 30;
        this.lastDamageTaken = 0;
    }

}
