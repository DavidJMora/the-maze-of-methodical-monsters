const player = {
    isAlive: true,
    fight(enemy) {
        // const min = Math.min(1);
        // const randomDamage = Math.ceil(Math.random() * (min + 4));
        // this.lastDamageTaken = randomDamage;
        
        const newHitPoints = this.hitPoints - randomDamage;
        this.hitPoints = newHitPoints;
        if(this.hitPoints <= 0) {
            this.isAlive = false;
        }
    }, 
    lastDamageTaken: 0,
    hitPoints: 100,
    level: 1,

}
