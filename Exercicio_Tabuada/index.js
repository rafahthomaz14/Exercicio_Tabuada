function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //verificar se foi digitado
    if(num.value.length == 0){
        alert('Digite um Numero !') 
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++ ) {
            //criando um elemento dentro do option
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}