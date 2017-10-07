/*
 * Create a list that holds all of your cards
 */
var cardlist =["diamond","paper-plane-o","anchor","bolt","cube","leaf","bicycle","bomb","diamond","paper-plane-o","anchor","bolt","cube","leaf","bicycle","bomb"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
shuffle(cardlist);
var currentstar=3;
var list=[];
var result=0;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array
}

function addcardtolist(card1){
    
       list.push(card1);
       if(list.length==2){
        if(list[0]===list[1]){
           $('.open').addClass('match');
           result=result+1;
           list=[];
           checkresult();
        }else if(list[0]!=list[1]) {
            setTimeout(function(){
                list=[];
                resetcard();
                },1000); 
           //$('.card').removeClss('disabled');
                checkstar();
                checkresult();
        }
             $('.card').on('click',function(){

             });
            
        }else if(list.length===3){
            resetcard();
            
            list=[];
        }
  
       }
       
function reset(){
    run();
    $(".star1").show("star1");
    $(".star2").show("star2");
    $(".star3").show("star3");
}

function checkstar(){
var selectstar = "star"+currentstar
var star =$("."+selectstar).hide(selectstar);
currentstar-=1;

}

function checkresult(){
    if(result==1){
        alert("WIN");
    }
    if(currentstar==0){
        alert("LOSE")
        setTimeout(function(){
                reset();
                },3000); 

    }
}
function resetcard(){
    
        $('.card').removeClass('open');
        $('.card').removeClass('show')

}


function selectcard(){
     showandclose();
    $('.card').on('click',function(){
     var test ="card"
     $(this).addClass('open');
     $(this).addClass('show');
    // $(this).off('click');
     var x=$(this);
     var x1 =x.find('i');
     var x2 =x1.attr('class');
     console.log(x2);
     var test =addcardtolist(x2);
    });  
}

function run(){
    $('.deck').empty();
    for (var i = 0; i < cardlist.length; i++) {
        $('.deck').append($('<li class="card"><i class="fa fa-' + cardlist[i] + '"></i></li>'))
    }
    var run= selectcard();
}
run();

function showandclose(){
     $('.card').addClass('open');
     $('.card').addClass('show');
        setTimeout(function(){
        $('.card').removeClass('open');
        $('.card').removeClass('show');
        $('selector').click(true);

    },3000)
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */