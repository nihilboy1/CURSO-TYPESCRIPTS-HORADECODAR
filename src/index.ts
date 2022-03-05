// declaração pro annotation
let x:number = 10
let first_name:string = "Samuel"
let permission:boolean = true
x = 7
console.log(x)



//declaração por inferencia (aqui ele também estará tipando a variavel como number)
let z = 10




// tipando objetos
const my_numbers: number[] = [1,2,3,] // esse array só vai aceitar itens do tipo number



// declarando tuplas
let my_tuple: [string, string, number] // só posso preencher a tupla se eu seguir a ordem pré estabelecida
my_tuple = ["a", "a", 2,]



// declarando objetos 
const my_object:{name:string, age:number} = {
    name:"Samuel",
    age:18
    // 
}



// any (aceita tudo)
let a:any = 1
a = "a"
a = true




// union type (me permite receber mais de um tipo numa variavel)
let id:string|number = "10"
id = 10




// type alias (cria um apelido pra alguns tipos selecionados)
type meu_tipo = string | boolean
let v:meu_tipo = true
v = "a"




// referenciando tipos (tamanhos de roupas)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}
const camisa = {
    name:"Camisa de heroi",
    size:Size.M
}



// literal types (define um valor especifico para uma variavel)
let teste: "valor1"
// teste = 1 (não posso)
teste = "valor1"




// funções (eu preciso tipar os argumentos e o retorno da função)
// usa-se :void para funções que não retornam nada
// para criar um argumento opcional, eu passo "?"antes do parâmetro
function sum(a:number, b:number):number {
    return a + b
}
console.log(sum(1,2))



// interface (é como se fosse uma classe, só que para definir tipos genéricos)
interface math_functions_params {
    n1: number
    n2: number
}
function sum_numbers(nums:math_functions_params){
    return nums.n1 + nums.n2
} // essa função só vai aceitar os tipos que foram pré estabelecidos na interface
console.log(sum_numbers({n1:1, n2:5})) // eu devo passar um objeto que se refere a interface



// narrowing ou checagem de tipos
function do_something(info: number | boolean){
    if (typeof info === "number"){
        console.log(`O numero é ${info}`)
        return
    }
    else {
        console.log("Não foi passado um numerp")
    }
}

// generics (cria funções genéricas, que recebem qualquer um item objeto especifico, mas que pode conter qualquer tipo)
function show_arrays_items <T>(arr:T[]):void {
    arr.forEach((item) => {
      console.log(item)
    })
}

const a1: number[] = [1,2,3]
const a2: string[] = ["a", "b", "c"]

show_arrays_items(a2)


// classes (cria um objeto aos moldes da classe)
class User {
    name
    role
    is_aproved

    constructor(name:string, role:string, is_aproved:boolean){
        this.name = name
        this.role = role
        this.is_aproved = is_aproved
    }

    show_username(){
        console.log(`O nome do usuário é: ${this.name}`)
    }
}

const zeca = new User("Samuel", "Admin", true)
console.log(zeca)
zeca.show_username()



// interfaces para classes

interface Ivahicle {
    brand: string
    show_brand():void
}

class Car implements Ivahicle {
    brand
    wheels

    constructor(brand: string, wheels:number){
        this.brand = brand
        this.wheels = wheels
    }

    show_brand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }
}

const fusca = new Car("VW", 4)
fusca.show_brand()



// herança
class SuperCar extends Car {
    engine

    constructor(brand:string, wheels:number, engine:number){
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)


// decorators intervem em uma classe antes de ela ser construida de fato, realizando alguma ação