let list_of_items =

    [
        {
            "name": "Strawberry",
            "index": 0,
            "kg_price":
                4.3,
            "delivery_list":
                [
                    {
                        "index": 0,
                        "weight_delivered": 0,
                        "weight_delivered_price": 0,
                        "weight_rest": 0,
                        "weight_rest_price": 0,
                        "weight_sold": 0,
                        "weight_sold_price": 0
                    }
                ]
        },

        {
            "name": "Yam",
            "index": 1,
            "kg_price":
                1,
            "delivery_list":
                [
                    {
                        "index": 0,
                        "weight_delivered": 3,
                        "weight_delivered_price": 3,
                        "weight_rest": 0,
                        "weight_rest_price": 0,
                        "weight_sold": 3,
                        "weight_sold_price": 3
                    }
                ]
        }

    ]

function loadList() {
    const add_line_elt = document.getElementById("add_line");
    for(const input of document.querySelectorAll(".item_main")){
        input.remove();
    }

    for (let item of list_of_items) {
        let item_elt = document.createElement("tr");
        item_elt.innerHTML =
           ` <td>${item["index"]}</td><td>${item["kg_price"]}</td><td>${item["name"]}</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-light" id="">\n
                    <img src="src/basket-fill.svg" alt="basket full">\n
                </button>\n
                    <button class="btn btn-light" onclick="modify_line_disp(${item["index"]})">\n
                        <img src="src/pencil-fill.svg" alt="pencil full">\n
                    </button></td>`;
        item_elt.classList.add("item_main")

        add_line_elt.before(item_elt)
    }
}

function displayAddLine() {
    document.getElementById("add_line").classList.toggle("d-none");
}
function modify_line(){

    if(document.getElementById("modify_line").classList.contains("d-none")){
        return;
    }
    let idx = Number(document.getElementById("index_mod").innerText);
    let item = list_of_items.find(o => o.index === idx);
    item["name"] = document.getElementById("name_mod").value;
    item["kg_price"] = Number(document.getElementById("kg_price_mod").value);

    console.log(list_of_items)
    loadList();
    document.getElementById("modify_line").classList.toggle("d-none");
}

function modify_line_disp(idx) {
    if(!document.getElementById("modify_line").classList.contains("d-none")){
        return;
    }
    let item = list_of_items.find(o => o.index === idx);

    document.getElementById("index_mod").innerText = item["index"];
    document.getElementById("name_mod").value = item["name"];
    document.getElementById("kg_price_mod").value= item["kg_price"];
    document.getElementById("modify_line").classList.toggle("d-none");
}

function calculateResults(item_price, qty_delivered, qty_rest) {
    let results = {};
    results["delivered_price"] = (item_price * qty_delivered).toFixed(2);
    results["rest_price"] = (item_price * qty_rest).toFixed(2);
    results["qty_sold"] = (qty_delivered - qty_rest).toFixed(2);
    results["sold_price"] = ((qty_delivered - qty_rest) * item_price).toFixed(2);
    console.log(results)
    return results;
}

function add_line(elt) {

}
