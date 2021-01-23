var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

//ASSET_MANAGER.queueDownload("./Beach_Farm.png");
ASSET_MANAGER.queueDownload("./sheet.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	
	canvas.focus();
	gameEngine.init(ctx);
	new SceneManager(gameEngine);
	gameEngine.start();
});
