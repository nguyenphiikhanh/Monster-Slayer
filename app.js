new Vue({
    el: '#app',
    data: {
        chibiHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
    },
    methods: {
        startNewGame() {
            this.gameIsRunning = true;
            this.chibiHealth = 100;
            this.monsterHealth = 100;
        },
        attack() {
            //monster
            var maxDamage = 10;
            var minDamage = 4;
            var damage = Math.max(Math.floor(Math.random() * maxDamage + 1, minDamage));
            this.monsterHealth -= damage;


            //chibi
            // maxDamage = 20;
            // minDamage = 8;
            var damage = Math.max(Math.floor(Math.random() * maxDamage + 1, minDamage));
            this.chibiHealth -= damage;


            if (this.chibiHealth <= 0) { //monster win
                this,chibiHealth = 0;
                Swal.fire(
                    'You lose the Monster!',
                    "Don't give up! Play again ♥",
                    'warning'
                )
                this.gameIsRunning = false
                return;
            }
            if (this.monsterHealth <= 0) { // chibi win
                this.monsterHealth = 0;
                Swal.fire({
                    title: 'Configuration!',
                    text:"You've won the Monster!",
                    icon: 'success',
                })
                this.gameIsRunning = false
                return;
            }

        },
        specialAttack() {

        },
        heal() {

        },
        giveUp() {

        }
    }
})