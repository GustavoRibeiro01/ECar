import { ImageCarro } from './image-carro'

export class Carro {
    public Id: number
    public Nome: string
    public Tipo: string
    public Preco: number
    public CarroFavorito: boolean
    public CarroReservado: number
    public Image: string
    public DataReserva: string
    public Situacao: string

    public ListaImages: ImageCarro[]

    constructor(nome: string, tipo: string, preco: number)
    { 
        this.Nome = nome,
        this.Tipo = tipo
        this.Preco = preco
        this.CarroFavorito = false
    }
}
