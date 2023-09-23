import React {component} from 'React';

class caluladora extends component{
    constructor(){
        super();
        this.state = {
            valorenPantalla : '0',
            operador: null,
            primerValor:'',
            segundoValor: false,
        };
    }

    ingresarDigito(digito){
        const{ valorenPantalla, segundoValor}= this.state;

        if(segundoValor){
            this.setState({
                valorenPantalla : String(digito),
                segundoValor: false,
            });
        }else{
            this.setState({
                valorenPantalla: valorenPantalla ==='0' ? String (digito): valorenPantalla + digito,
            });
        }
    }
}

borrarResultados(){
    this.setState({
        valorenPantalla : '0',
            operador: null,
            primerValor:'',
            segundoValor: false,
    });
}
primerOperador(operador){
    const{ valorenPantalla, primerOperador}= this.state;

    if(primerValor === ''){
        this.setState({
            primerValor: valorenPantalla,
            operador : operador,
            segundoValor: true,
        });
    }else{
        const resultado = this.calcular();
        this.setState({
            valorenPantalla: String (resultado),
            primerValor: String(resultado),
            operador = operador,
            segundoValor:true,
        });
    }
}
calcular(){
    const{valorenPantalla , primerValor , operador}  = this.state;
    const primerValor = parseFloat(primerValor);
    const segundoValor = parseFloat(valorenPantalla);

    switch(operador){
        case '+':
            return primerValor + segundoValor;
        case '-':
            return primerValor - segundoValor;
        case '*':
            return primerValor * segundoValor;
        case '/':
            return primerValor / segundoValor;
        case '%':
            return (primerValor/100) * segundoValor;
        default:
            return segundoValor;
    }
}

render(){
    const{valorenPantalla} = this.state;

    return(
        <div className="calculadora">
            <div className="resultadoPantalla">{
                valorenPantalla}
            </div>
            <div className="numeros">
                <button onClick={() => this.ingresarDigito(0)}>0</button>
                <button onClick={() => this.ingresarDigito(1)}>1</button>
                <button onClick={() => this.ingresarDigito(2)}>2</button>
                <button onClick={() => this.ingresarDigito(3)}>3</button>
                <button onClick={() => this.ingresarDigito(4)}>4</button>
                <button onClick={() => this.ingresarDigito(5)}>5</button>
                <button onClick={() => this.ingresarDigito(6)}>6</button>
                <button onClick={() => this.ingresarDigito(7)}>7</button>
                <button onClick={() => this.ingresarDigito(8)}>8</button>
                <button onClick={() => this.ingresarDigito(9)}>9</button>
            </div>
            <div className="operadores">
            <button onClick={() => this.establecerOperador()}>+</button>
            </div>
        </div>
    )
}
