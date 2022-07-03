function getCommodity(){

    let table = document.getElementById("show_requisition_line_table_tag")
    if (!table) throw new Error("Não foi possível localizar a tabela.")

    let elementoBusca = table.querySelectorAll("span")

    let dadoExtrair = ["Commodity"]
    let commodity = []

    let encontrado = false;
    dadoExtrair.forEach(nomeDado => {
        for (let el of elementoBusca){
            if(el.innerHTML.trim() ==nomeDado){
                commodity.push(el.nextElementSibling.innerHTML.trim());
                encontrado = true;
            }
        }
        if(!encontrado) throw new Error("Erro ao extrair Commodity da requisição.")
    });
    return JSON.stringify(commodity)
}


