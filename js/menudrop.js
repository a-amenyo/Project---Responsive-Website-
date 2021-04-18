$('.fas').on("click", ()=>{
    // point to the class of the add to cart pop up card 
    $('.menu').slideDown();
    $('#cancel').slideDown();
    $('.logo').slideDown();
});
$('#cancel').on("click", ()=>{
    // point to the class of the add to cart pop up card 
    $('.menu').slideUp();
    $('.fas').slideUp();
    $('.nav').slideUp(); 
    $('.logo').slideUp();
});