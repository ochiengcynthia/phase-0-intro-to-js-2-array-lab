const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Otis){
    cats.push(Otis);
}   
function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();}

function appendCat(millie){
    cats.push(millie);}

    function prependCat(Bruno){
        cats.push(Bruno);}

        function removeLastCat(){
            cats.slice(3);}

            function removeFirstCat(){
                cats.slice(1);}