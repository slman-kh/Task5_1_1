let result = document.getElementById('res');
function Display(the_number){
    result.value+=the_number;
}
function Delete(){
    result.value = result.value.slice(0,-1);
}
function Clear(){
    result.value = '';
}

function Eval(){
    try{
        result.value = eval(result.value)
    }
    catch(error){
        result.value= 'Invalid input';
    }
}


