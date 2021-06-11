class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    
     question.hide()
    
  

    //write code to change the background color here
background('yellow')

    //write code to show a heading for showing the result of Quiz
    textSize(20)
text("Result of the Quiz", 425, 50);

    //call getContestantInfo( ) here
    if(allContestants !== undefined){
     
      textSize(20)
     

    }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here
    fill("Blue")
 text("*NOTE: Contestant who answered correct are hightlighted in green color!", 130, 230);
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
var correctAns ="2";
if (correctAns === allContestants[plr].answer){
    fill("Green")
}else 
    fill("red")
    }
  }

}
