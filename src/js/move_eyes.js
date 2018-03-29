// $(document).ready(function(){
//     $('html').mousemove(function(e){
//           var y = e.pageY;
//           var x = e.pageX;                    
//           $('').css({'top': y}); 
//           $('.left-eye.pupil-left').css({'left': x});

//     });
//   });

  $(document).ready(function(){
    $('#wrapper').mousemove(function(e){
          var y = e.pageY - this.offsetTop;
          var x = e.pageX + this.offsetLeft;                    
          $('.eyes').css({'top': (79 + y * 0.003)}); 
          $('.eyes').css({'left': (72 + x * 0.005)});

          console.log(x);
          console.log(y);

        //   $('.right-eye').css({'top': y}); 
        //   $('.right-eye').css({'left': x});

    });
  });