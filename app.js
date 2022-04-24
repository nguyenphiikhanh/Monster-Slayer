new Vue({
    el: '#app',
    data: {
        chibiHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
    },
    methods:{
        startNewGame(){
            this.gameIsRunning = true;
            this.chibiHealth = 100;
            this.monsterHealth = 100;
        }
    }
})