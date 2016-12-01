
var num, operando1 = 0, operando2 = 0; op = ""; clean = false;

$( function(){

  num = $("#num");
  vaciar();

  $(".buttonMod5Number").on("click", function() {

    if(clean) {
      clean = false;
      vaciar();
    }
    
    if (this.value === "." ) {
      
      if ((num.val()).indexOf(".") < 0) {
        
        num.val(num.val() + this.value);

        if ( op === "") {
          operando1 += this.value;
        } else {
          operando2 += this.value;
        }

      }

    } else {
      
      num.val(num.val() + this.value);

      if ( op === "") {
        operando1 += this.value;
      } else {
        operando2 += this.value;
      }

    }

  });

  $(".buttonMod5Operat").on("click", function() {
    
    if(clean) {
      clean = false;
      vaciar();
    }
  
    if ( op === "" && operando1 !== 0) {
      
      switch (this.value) {
        case "x2":
          num.val(+operando1 * +operando1);
          clean = true;
          break;
        case "1/x":
          num.val(1 / +operando1);
          clean = true;
          break;
        case "sqrt":
          num.val(Math.sqrt(operando1));
          clean = true;
          break;
        case "ent":
          if (operando1 > 0) {
            num.val(Math.floor(+operando1)); 
          } else {
            num.val(Math.ceil(+operando1));
          }
          clean = true;
          break;
        default:
          num.val(num.val() + this.value);
          op = this.value;
          break;
      }
      if (clean) {
        operando1 = 0;
        operando2 = 0;
        op = "";
      }
      
    } else if (this.value === "-") {
      if (operando1 === 0) {
        operando1 = "-";
        num.value += "-";
      } else if (operando2 === 0) {
        operando2 = "-"
        num.value += "-";
      }
    }

  });

  $("#result").on("click", function() {

    switch (op) {
    case "+":
      num.val(+operando1 + +operando2);
      clean = true;
      break;
    case "-":
      num.val(+operando1 - +operando2);
      clean = true;
      break;
    case "*":
      num.val(+operando1 * +operando2);
      clean = true;
      break;
    case "/":
      num.val(+operando1 / +operando2);
      clean = true;
      break;
    case "xY":
      var operandoLocal = operando1;
      for (i = 1; i<operando2; i++) {
        operando1 = +operando1 * +operandoLocal;
      }

      num.val(+operando1);
      clean = true;
      break;
    }

    operando1 = 0;
    operando2 = 0;
    op = "";

  });

});

function vaciar () {num.val("");}

function cleanAll () {
  vaciar();
  operando1 = 0;
  operando2 = 0;
  op = "";
}
