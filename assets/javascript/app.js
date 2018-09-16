$(document).ready(function(){
    $("#start-button").click(function(){
        var number = 60;
      $("#start-button").on("click", start);
      $("#submit").on("click", finish);
      $("#restart").on("click", restart);  
      function start(){
          counter = setInterval(timer, 1000);
          showMe(".question");
          showMe(".answers");
          showMe("#submit");
          hideMe("#start-button");
          hideMe(".rules");
          hideMe("#restart");
          hideMe("#results1");
          hideMe("#results2");
          hideMe("#results3");
      }
      function timer(){
        number--
        $("#show-number").html("<h2>" + number + "</h2>" );
        if (number === 0){
          stop(); 
        }
      }
      function stop(){
        clearInterval(counter);
        $("#results1").show();
        $("#results2").show();
        $("#results3").show();
        $("#restart").show();
        $(".question").hide();
        $(".answers").hide();
        $("#submit").hide();
                
      }
      function finish(){
          number = 1;
          clearInterval(counter);
          timer();
      }
  
      function restart(){
          number = 60;
          start();
      }
  
      function hideMe(e) {
          $(e).hide();
      }
      function showMe(e) {
          $(e).show();
      }
        
    
        start();
    });
});

    // function check () {
    // var q1 = document.container.q1.value;
    // var q1 = document.container.q2.value;
    // var q1 = document.container.q3.value;
    // var q1 = document.container.q4.value;
    // var q1 = document.container.q5.value;
    // var correct = 0;

            // if (q1 == "5") {
                // correct++
            // }
            // if (q2 == "7") {
                // correct++
            //}
            // if (q3 == "Stu Mackenzie") {
                // correct++
            //}
            // if (q4 == "2") {
                // correct++
            //}
            // if (q5 == "4") {
                // correct++
            //}
        //}-- !>