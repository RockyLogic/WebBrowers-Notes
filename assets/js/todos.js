
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var input = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+input+"</li>");
    }
});

$(".fa-pencil-square-o").click(function(){
    $("input[type='text']").fadeToggle();
});

$(".fa-times").click(function(){
    $("li").fadeOut(500, function(){
        $("li").remove();
    });
});