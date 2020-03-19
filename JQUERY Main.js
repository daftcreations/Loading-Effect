$(document).ready(function(){
  $('#bg').animate({'width':'100%'},5000);
  $('#percentage').animate({'left':'1250'},4800);
  $('#line').animate({'left':'1320'},4750);

  $count=0;
  setper();

  function setper()
  {
    if($count <= 100)
    {
      $('#percentage').text($count+'%');
      $count++;
      setTimeout(setper,40);
    }
  }
});
