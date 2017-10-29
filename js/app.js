/*
 * Create a list that holds all of your cards
 */
var cardlist =["diamond","paper-plane-o","anchor","bolt","cube","leaf","bicycle","bomb","diamond","paper-plane-o","anchor","bolt","cube","leaf","bicycle","bomb"];

/*
 
 *   - 
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

var currentstar=3;
var list=[];
var result=0;
var starttime = Date.now();
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close1")[0];
var wrong_attemp =0;



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
       
function reset(){
    run();
    $(".star1").show("star1");
    $(".star2").show("star2");
    $(".star3").show("star3");
    list=[];
    result=0;
    starttime = Date.now();

}

function checkstar(){
    if (wrong_attemp==3){
        var selectstar = "star"+currentstar
        var star =$("."+selectstar).hide(selectstar);
        currentstar-=1;
        wrong_attemp=0;
        }
}

function checkresult(){
    if(result==8){
         setTimeout(function(){
                 $(".modal-content").css("display","block");
                 $(".modal").css("display","block");
                 $(".modal-content").append($('<p class="showresult">YOU WIN ! TOTAL TIME ='+timecount()+" "+"second"+'</p>'));
                  $(".modal-content").append($('<p class="showresult">totalstar='+currentstar+'</p>'));
                 result=0;
                },1000);
                $('.showresult').hide();
                list=[]; 

            
    }
}
function resetcard(){
        $('.card').removeClass('open');
        $('.card').removeClass('show')

}

function wrongcard(list1,list2){
    $('.show').addClass('unmatch');
    setTimeout(function(){
        $('.show').removeClass('unmatch');
    },1000);
    //$('.card').removeClass('open');
    
}

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

    
function showandclose(){
     $('.card').addClass('open');
     $('.card').addClass('show');
        setTimeout(function(){
        $('.card').removeClass('open');
        $('.card').removeClass('show');
        $('selector').click(true);

    },3000)
}

function timecount(){
    var endtime = Date.now();
    var totaltime= ((endtime-starttime)/1000);
    return Math.floor(totaltime);

}

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


// When the user clicks on the button, open the modal 
// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it
