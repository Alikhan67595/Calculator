var inputElm = document.getElementById("calInput")


function Calculate(btnValue) {

    var inputvalue = inputElm.value

    if (btnValue === "=") {
        var result = eval(inputvalue)
        inputElm.value = result

        return
    }
    

    if (btnValue === "del") {
        inputElm.value = inputvalue.slice(0,inputvalue.length-1 )
        return
    }

    if (btnValue === "C") { 

        inputElm.value = ""

        return
    }

   

    inputElm.value += btnValue;



}