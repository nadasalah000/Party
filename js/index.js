// ~ section one
$(".open").click(function(){
    $("#sideMenu").animate({ width:'20%'},80)
    $("#homeContent").animate({marginLeft :'20%'},80)
})

$(".closeBtn").click(function(){
    $("#sideMenu").animate({ width:'0px'},80)
    $("#homeContent").animate({marginLeft :'0px'},80)
})


$("#sideMenu a").click(function(){
    var Id= $(this).attr("href");
    var XSection = $(Id).offset().top;
    $("html , body").animate({scrollTop:XSection},1000);
})


// ~ section two
$('#Duration .tittle').click(function(){
    $('.caption').not($(this).next()).slideUp(200); 
    $(this).next().slideToggle(200);
});


// ~~ section three
function countDownToTime(Day) {
  
    let PartyTime = new Date(Day);
    PartyTime = (PartyTime.getTime()/1000);

    let NowTime = new Date();
    NowTime = (NowTime.getTime()/1000);

    TimeBetweenThem = (PartyTime- NowTime);

    //? time between the party time and the current time
       let days = Math.floor( TimeBetweenThem / (24*60*60));
       let d = days * (24*60*60);
       let hours = Math.floor((TimeBetweenThem - d) / (60*60));
       let h = hours * (60*60);
       let mins = Math.floor((TimeBetweenThem - d - (h)) / 60);
       let m = mins * 60;
       let secs = Math.floor((TimeBetweenThem - d - (h) - (m)))

       $('.S').html(`${ secs} s`);
       $(".M").html(`${ mins } m`);
       $(".H").html(`${hours} h`);
       $(".D").html(`${days} D`);
    
    setInterval(function() {
          countDownToTime(Day); 
        }, 1000);
}

countDownToTime("2 may 2024 1:00:00");


// ~ section four

$('textarea').keyup(function() {
  var charLength = $(this).val().length;
  var Residual = 100 -charLength;
    if(Residual<=0){
        $("#pchar").text("Unavailable");
        $("#pchar").css("color", "red")
    }else{
        $("#char").text(Residual);
    }
});