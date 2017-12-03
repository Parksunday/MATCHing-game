/*
 * Create a list that holds all of your cards
 */
var cardlist =["diamond","paper-plane-o","anchor","bolt","cube","leaf","bicycle","bomb","diamond","paper-plane-o","anchor","bolt","cube","leaf","bicycle","bomb"];

/*
 
 *   - 
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


var currentstar=3;
var list=[];
var result=0;
var starttime = Date.now();
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close1")[0];
var wrong_attemp =0;



// Shuffle function from http://stackoverflow.com/a/2450976
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

//recevice  card class name and put it in the array after receiving 2 cards name, caompare the first card name and second card name to see whether they are matched or not

function addcardtolist(card1){
       $('.card').on('click',function(){});
       list.push(card1);
       if(list.length==2){
        if(list[0]===list[1]){
           $('.open').addClass('match');
           $('.open').removeClass('show');
           result=result+1;
           list=[];
           checkresult();
        }else if(list[0]!=list[1]) {
                wrongcard(list[0],list[1]);
                wrong_attemp+=1;
            setTimeout(function(){
                list=[];
                resetcard();
                },1000); 
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

// reset the star and time  run the game again  
function reset(){
    run();
    $(".star1").show("star1");
    $(".star2").show("star2");
    $(".star3").show("star3");
    list=[];
    result=0;
    starttime = Date.now();

}

// if the user pick a wrong match 3 times 
// remove the star by one
function checkstar(){
    if (wrong_attemp==3){
        var selectstar = "star"+currentstar
        var star =$("."+selectstar).hide(selectstar);
        currentstar-=1;
        wrong_attemp=0;
        }
}

// check if the user win the game or not if the user win display the banner 
function checkresult(){
    if(result==8){
         setTimeout(function(){
                 $(".modal-content").css("display","block");
                 $(".modal").css("display","block");
                 $(".modal-content").append($('<p class="showresult">YOU WIN ! TOTAL TIME = '+timecount()+" "+"seconds"+'</p>'));
                  $(".modal-content").append($('<p class="showresult">totalstar='+currentstar+'</p>'));
                 result=0;
                },1000);
                $('.showresult').hide();
                list=[]; 

            
    }
}

// reset the card to close 
function resetcard(){
        $('.card').removeClass('open');
        $('.card').removeClass('show')

}

// set unmatch scenario for card 
function wrongcard(list1,list2){
    $('.show').addClass('unmatch');
    setTimeout(function(){
        $('.card').removeClass('unmatch');
    },1000);
    //$('.card').removeClass('open');
    
}

// trigger when user click on the cards recevie the card class name and pass it to the list 
function selectcard(){
     showandclose();
    $('.card').on('click',function(){
     var test ="card"
    // * Display the cards on the page
     $(this).addClass('open');
     $(this).addClass('show');
     var x=$(this);
     var x1 =x.find('i');
     var x2 =x1.attr('class');
     var test =addcardtolist(x2);

    });  
}

//main function to run the program 
function run(){

    shuffle(cardlist);
    $('.deck').empty();
    for (var i = 0; i < cardlist.length; i++) {
        $('.deck').append($('<li class="card"><i class="fa fa-' + cardlist[i] + '"></i></li>'))
    }



    var run= selectcard();
     currentstar=3;
}


run();

$('.restart').on('click',function(){
        reset();
});

// show the card at the beginning of the game 
function showandclose(){
     $('.card').addClass('open');
     $('.card').addClass('show');
        setTimeout(function(){
        $('.card').removeClass('open');
        $('.card').removeClass('show');
        $('selector').click(true);

    },3000)
}

//calculate time taken to finish 
function timecount(){
    var endtime = Date.now();
    var totaltime= ((endtime-starttime)/1000);
    return Math.floor(totaltime);

}

//reset the banner 
span.onclick = function() {
            modal.style.display = "none";
            reset();
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

 // modal
 // Get the modal

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal

