function play() {
    textSize(25);
    FileList("white");
    text("Player 1 :" +allPlayers.player1.score,50,50);
    text("Player 2 :" +allPlayers.player2.score,50,100);

    if(player.index !== null) {
        for (var i = 0; i < fruitGroup.length; i++) {
            if (fruitGroup.get(i).isTouching(players)) {
                fruitGroup.get(i).destroy();
                player.score =player.score+1;
                player.update();
            }
        }
    }
  }