export namespace Calcolatore{
    export function calcola(str:string){
        const strPoint = str.replaceAll(",", ".")
        const array = strPoint.split(/([+\-x/%])/)
        console.log(array)
        if(array[0] === "") throw new Error("L'operazione non può iniziare con un operando")
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
            case "%":
                return (parseFloat(array[0])*parseFloat(array[2])/100)    
            default:
                break;
        }
    }
}