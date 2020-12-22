$(document).ready(function(){

    $('#totalTimeLine').on('mousewheel', function(event , delta) {
        if( delta == -1 && event.deltaY == -1){
            this.scrollLeft += (delta) + 20;
        } else {
            this.scrollLeft -= (delta) + 20;
        }

        console.log(this.scrollLeft, delta,event.deltaX, event.deltaY, event.deltaFactor);
        event.preventDefault();
    });

    $('#right_scroll').click(function(event) {
        event.preventDefault();
        $('#totalTimeLine').animate({
          scrollLeft: "+=300px"
        }, "slow");
    });
     
    $('#left_scroll').click(function(event) {
        event.preventDefault();
        $('#totalTimeLine').animate({
          scrollLeft: "-=300px"
        }, "slow");
    });

});  