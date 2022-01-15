let result = document.getElementById('input');

let calculate = (number) => {
    result.value += number;


}

let equal = () => {

    try {

        result.value=eval(result.value)
    }
    catch(err){

        alert('invalid input');
    }
}

function clr(){

    result.value = " ";
}
function del(){

    result.value = result.value.slice(0, -1);
}