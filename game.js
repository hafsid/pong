class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.shapeColor = "black"
    
    player2 = createSprite(800,500);
    player2.shapeColor = "black"
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                
                 drawSprites();
                 for(var plr in allPlayers){
                    var index =0;
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;

                    
                     
                     players[index -1].x =x;
                     if(keyDown("up")){
                        players[index - 1].y += y;
                     }
                     if(keyDown("down")){
                        players[index - 1].y -= y;
                     }
                    //  players[index - 1].y = mouseY;
                       //players[index].visible=false;
  
                    
                         textSize(25);
                         fill("white");
                         text(allPlayers.player1.name + "'s Score:"+allPlayers.player1.score,50,50);
                        text(allPlayers.player2.name + "'s Score:" + allPlayers.player2.score, 50, 100);
                 
                 }
                
               
    }

    end(){
       console.log("Game Ended");
    }
}
