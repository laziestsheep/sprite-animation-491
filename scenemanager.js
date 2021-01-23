class SceneManager {
    constructor(game) {
        this.game = game;
        this.sheet = new sheet(game, 300, 200);        
        this.loadBackground();
    };

    loadBackground() {
        // add background
        let background = new sheet(this.game, 0, 0);
        this.game.addEntity(background);
        
        this.game.addEntity(this.sheet);
    }
}