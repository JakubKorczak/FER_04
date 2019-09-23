/**
 * Stwórzcie funkcję o nazwie getAverage,
 * która może przyjąć dowolną liczbę parametrów (w postaci liczb)
 * i która zwraca średnią arytmetyczną tych liczb.
 *
 * Przykład wywołania:
 * getAverage(2,4,5,6,7,79);
 */

function getAverage(){
    return [...arguments].reduce( (p,c) => p+c, 0) / arguments.length;
}

console.log(getAverage(2,3,2,4,5,2));