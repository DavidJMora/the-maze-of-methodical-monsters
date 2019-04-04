const monster = {
    hitPoints: 30,
    lastDamageTaken: 0,
    isAlive: true,
    calculateRawDamage: function() {
        const min = Math.min(1);
        const randomDamage = Math.ceil(Math.random() * (min + 4));
        return console.log(randomDamage + 2);
    }
};