export class Carro {
    public Id: number
    public Nome: string
    public Tipo: string
    public Preco: number
    public CarroFavorito: boolean
    public CarroReservado: number

    constructor(nome: string, tipo: string, preco: number)
    { 
        this.Nome = nome,
        this.Tipo = tipo
        this.Preco = preco
        this.CarroFavorito = false
    }
}
