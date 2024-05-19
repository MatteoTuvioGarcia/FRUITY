function displayAddLine() {
    document.getElementById("add_line").classList.toggle("d-none");
}

function modify_line(elt) {
    console.log(elt)
    document.getElementById("modify_line").classList.toggle("d-none");
}

function calculateResults(item_price, qty_delivered, qty_rest){
    let results = {};
    results["delivered_price"] = (item_price * qty_delivered).toFixed(2);
    results["rest_price"] = (item_price * qty_rest).toFixed(2);
    results["qty_sold"] = (qty_delivered - qty_rest).toFixed(2);
    results["sold_price"] = ((qty_delivered - qty_rest) * item_price).toFixed(2);
    console.log(results)
    return results;
}

function add_line(elt) {
    // let qty_delivered_input = document.getElementById("delivered_input");
    let kg_price_input = document.getElementById("kg_price_input");
    let name_input = document.getElementById("name_input");
    // let rest_input = document.getElementById("rest_input");
    if(name_input.innerText.toString() === " "){
        document.getElementById("add_line").classList.toggle("d-none");
        name_input.value = ""
        kg_price_input.value = ""
        // qty_delivered_input.value = ""

        // rest_input.value = ""
        return;
    }
    if(document.getElementById(name_input.value) != null){
        document.getElementById("add_line").classList.toggle("d-none");
        name_input.value = ""
        kg_price_input.value = ""
        // qty_delivered_input.value = ""
        // rest_input.value = ""
        return;
    }


    let add_line = document.getElementById("add_line");
    let new_row       = document.createElement("tr");
    let kgPrice             = document.createElement("td");
    let name                = document.createElement("td");
    let qty_delivered       = document.createElement("td");
    let delivered_price     = document.createElement("td");
    let qty_rest            = document.createElement("td");
    let rest_price          = document.createElement("td");
    let qty_sold            = document.createElement("td");
    let sold_price          = document.createElement("td");
    let actions             = document.createElement("td");
    let index = document.createElement("td");

    let results = calculateResults(Number(kg_price_input.value), 0, 0);
    kgPrice.innerText           = Number(kg_price_input.value).toFixed(2);
    name.innerText              = name_input.value;
    qty_delivered.innerText     = '0.00';
    qty_rest.innerText          = '0.00';
    delivered_price.innerText   = results["delivered_price"];
    // rest_price.innerText        = results["rest_price"];
    // qty_sold.innerText          = results["qty_sold"];
    // sold_price.innerText        = results["sold_price"];
    actions.innerHTML = ' <button class="btn btn-light" id="" >\n' +
        '                    <img  src="src/basket-fill.svg" alt="basket full"/>\n' +
        '                </button>\n' +
        '                <button class="btn btn-light" onclick="modify_line(this)">\n' +
        '                    <img  src="src/pencil-fill.svg" alt="pencil full"/>\n' +
        '                </button>'
    new_row.appendChild(index);
    new_row.appendChild(kgPrice);
    new_row.appendChild(kgPrice);
    new_row.appendChild(name);
    new_row.appendChild(qty_delivered);
    new_row.appendChild(delivered_price);
    new_row.appendChild(qty_rest);
    new_row.appendChild(rest_price);
    new_row.appendChild(qty_sold);
    new_row.appendChild(sold_price);
    new_row.appendChild(actions);
    new_row.id = name_input.value
    add_line.before(new_row);
    name_input.value = ""
    kg_price_input.value = ""
    document.getElementById("add_line").classList.toggle("d-none");
}
