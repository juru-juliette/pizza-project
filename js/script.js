function Quest(size,crust,topping,flavour,number){
    this.chooseSize = size;
    this.chooseCrust = crust;
    this.chooseToppings = toppings;
    this.chooseFlavour= flavour;
    this.chooseNumber = number;
}
Quest.prototype.fullOrder = function (){
    return this.size + "," + this.crust + "," + this.toppings + "," + this.flavour + "," +this.number;
}
function resetfield(){
    $("input#checkbox").val();
    $("input#crust").val();
    $("input#flavour").val();
    $("input#toppings").val();
    $("input#number").val();
}
$(document).ready(function() {
    $("form.form-order").submit(function(event) {
        event.preventDefault();
    
        var inputtedSize= $("input#checkbox").val();
        var inputtedCrust = $("input#crust").val();
        var inputtedFlavour= $("input#flavour").val();
        var inputtedTopping = $("input#toppings").val();
        var inputtedNumber= $("input#number").val();
        var newContact = new Contact(inputtedSize, inputtedCrust,inputtedFlavour,inputtedTopping,inputtedNumber);
   
    });
























