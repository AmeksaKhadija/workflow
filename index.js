function calcule(){
    switch(operation){
        case '+':
            var table = inputt.innerText.split('+');
            var sum =0;
            for(let i =0 ; i <table.length;i++){
                sum += Number(table[i]);
            }
            inputt.innerHTML= sum;
            break;

    
    case '-':
        var table = inputt.innerText.split('-');
        var diff =table[0];
        for(let i =1 ; i <table.length;i++){
            diff -= Number(table[i]) ;
        }
        inputt.innerHTML= diff;
    break;

    case '*':
        var table = inputt.innerText.split('*');
        var mult =table[0];
        for(let i =1 ; i <table.length;i++){
            mult *= Number(table[i]);
        }
        inputt.innerHTML= mult;
        break;

        case '/':
            var table = inputt.innerText.split('/');
            var diff =table[0];
            for(let i =1 ; i <table.length;i++){
                if(table[i]>0){
                    diff /= Number(table[i]);
                    inputt.innerHTML= diff;
                }
                else 
                inputt.innerHTML='sorry';
              
                
            }
            
         break;



}
}



function afficher(n){
    inputt.innerHTML+=n;
    if(n=='+' || n=='-' ||n=='*' || n=='/' ){
     operation=n;
    }
   
 }
