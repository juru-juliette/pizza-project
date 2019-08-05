// business logic
function Quest(size, crust, toppings, sizeP, crustP, toppingsP) {
    this.pSize = size;
    this.pCrust = crust;
    this.pToppings = toppings;
    // this.pNumber = number;
    this.amountSize = sizeP;
    this.amountCrust = crustP;
    this.amountToppings = toppingsP;
    // this.amountNumber = numberP;

}



Quest.prototype.fullOrder=function(){
    return this.amountSize + this.amountCrust+ this.amountToppings  ;
}
//user interface
$(document).ready(function () {
    // $("form.form-order").submit(function(event){
    $(".press").last().click(function (event) {
        event.preventDefault();
        $(".m").show();
        var inputtedSize = $("#one option:selected").text();
        var inputtedCrust = $("#two option:selected").text();
        var inputtedTopping = $("#three option:selected").text();
        // var inputtedNumber = $("#number input:selected").text();
        var priceSize = parseInt($("#one option:selected").val());
        var priceCrust = parseInt($("#two option:selected").val());
        var priceToppings = parseInt($("#three option:selected").val());
        // var priceNumber = parseInt($("#number input:selected").val());

        var newPizza = new Quest(inputtedSize, inputtedCrust, inputtedTopping, priceSize, priceCrust, priceToppings);
        console.log(newPizza);

        //  $("ul#call").append("<p><span class='output'>" + newPizza.fullOrder() + "</span></p>");


        // $("#show-order h4").text(newPizza.fullOrder());
        $(".size").text(newPizza.pSize);
        $(".crust").text(newPizza.pCrust);
        $(".toppings").text(newPizza.pToppings);
        // $(".number").text(newPizza.pNumber);
        $(".total").text(newPizza.fullOrder());



    });
});




