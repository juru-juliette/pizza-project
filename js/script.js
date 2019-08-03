//business logic
function Quest(size, crust,flavour,toppings, number) {
    this.size = size;
    this.crust = crust;
    this.flavour = flavour;
    this.toppings = toppings;
    this.number = number;
}
Quest.prototype.fullOrder = function () {
    return this.size + "," + this.crust + "," + this.toppings + "," + this.flavour + "," + this.number;
}
// function resetfield() {
//     $("input#checkbox").val();
//     $("select#crust").val();
//     $("select#flavour").val();
//     $("input#toppings").val();
//     $("input#number").val();
// }
//user interface
$(document).ready(function () {
    $("form.form-order").submit(function (event) {
        event.preventDefault();

        var inputtedSize = $("input#checkbox").val();
        var inputtedCrust = $("select#crust").val();
        var inputtedTopping = $("select#flavour").val();
        var inputtedFlavour = $("select#toppings").val();
        var inputtedNumber = $("input#number").val();


        var order = new Quest(inputtedSize, inputtedCrust, inputtedFlavour, inputtedTopping, inputtedNumber)
        console.log(order);
    });

    $("ul#call").append("<li><span class='pick'>" + order.size + "</span></li>");
 
    $(".pick").last().click(function () {
        $("#show-order").show();
        $(".checkbox").text(order.size);
        $(".crust").text(order.crust);
        $(".flavour").text(order.flavour);
        $(".toppings").text(order.toppings);
        $(".number").text(order.number);

    });

});
