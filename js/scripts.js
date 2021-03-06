var price, crust_price, topping_price;
let total = 0;
function Getpizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
  $("button.proceed").click(function(event){
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

    switch (psize) {
      case "0":
        price = 0;
        break;
      case "large":
        price = 1200;
        console.log(price);
        break;
      case "medium":
        price = 850;
        console.log("The price is " + price);
        break;
      case "small":
        price = 600;
        console.log(price);
      default:
        console.log("error");
    }
    switch (pcrust) {
      case "0":
        crust_price = 0;
        break;
      case "Crispy":
        crust_price = 200;
        break;
      case "Stuffed":
        crust_price = 250;
        break;
      case "Gluten-free":
        crust_price = 180;
        break;
      default:
        console.log("No price");
    }
    let topping_value = ptopping.length * 50;
    console.log("toppins value" + topping_value);

    if ((psize == "0") && (pcrust == "0")) {
      console.log("nothing selected");
      $("button.proceed").show();
      $("#info").show();
      $("div.choice").hide();
      alert("Hungry peep please select pizza size and crust");
    }
    else {
      $("button.proceed").hide();
      $("#info").hide();
      $("div.choice").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html($("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);

    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function () {
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch (psize) {
        case "0":
          price = 0;
          break;
        case "large":
          price = 1200;
          console.log(price);
          break;
        case "medium":
          price = 850;
          console.log("The price is " + price);
          break;
        case "small":
          price = 600;
          console.log(price);
        default:
          console.log("error");
        }
        switch (pcrust) {
          case "0":
            crust_price = 0;
            break;
          case "Crispy":
            crust_price = 200;
            break;
          case "Stuffed":
            crust_price = 150;
            break;
          case "Gluten-free":
            crust_price = 180;
            break;
          default:
            console.log("No price");
        }
        let topping_value = ptopping.length * 50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);
      var newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

      $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
      console.log(newOrder);
    });

    $("button#checkout").click(function(){
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bill is sh. " +checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
    });

    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choice h2").hide();
      $(".pick-up").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliveryamount= checkoutTotal+150;
    });
  });
});