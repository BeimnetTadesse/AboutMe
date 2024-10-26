$("img").on("click" , function () {
    $("img").attr( "src" , "pho.jpg");
    setTimeout( function(){
        $("img").attr( "src" , "profile.jpg");
    } , 3000)
})
 


 