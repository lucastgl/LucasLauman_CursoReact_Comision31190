const irARestaurante = () => 'LLegué';
const buscarMesa = () => 'Me siento';
const pedirComida = (comida) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (comida === 'pizza'){
                resolve('llegó la pizza')
            }else{
                reject('No hay ingredientes')
            }
        }, 2000)
    })
}
const comer = () => 'Termine de comer';
const pago = () => 'Terminar de pagar';
const retirarse = () => 'Llego a casa\n';

////////////////////////////////////////////////////////

console.log(irARestaurante());
console.log(buscarMesa());
pedirComida('pizza').then((response)=>{//si hay pizza se ejecuta esto
    console.log(response);
    console.log(comer());
    console.log(pago());
}).catch(error =>{//si no hay pizza se ejecuta esto
    console.log(error);
}).finally( () => {//se aplica al final ya sea del then o del catch
    console.log(retirarse());
})

////////////////////////////////////////////////////////

const nums = [1,2,3,4,5];

const newNums = nums.map(num => num * 2);

console.log(newNums);