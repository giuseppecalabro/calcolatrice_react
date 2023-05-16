export namespace Calcolatore{
    export function calcola(str:string){
        const array = str.split(/([+\-x/%])/)
        if(array.length>3) throw new Error ("Un'operazione alla volta per ora")
        console.log(array.length)



        switch (array[1]) {
            case "+":
                return parseFloat(array[0])+parseFloat(array[2])
            case "-":
                return parseFloat(array[0])-parseFloat(array[2])
            case "x":
                return parseFloat(array[0])*parseFloat(array[2])
            case "/":
                return parseFloat(array[0])/parseFloat(array[2])   
            default:
                break;
        }
    }
}