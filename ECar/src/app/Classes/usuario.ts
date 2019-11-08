export class Usuario {

    public Id: number
    public Nome: string
    public CPF: string
    public Email: string
    public Senha: string
    public Administrador: boolean

    constructor(nome, cpf, email, senha)
    {
        this.Nome = nome
        this.CPF = cpf
        this.Email = email
        this.Senha = senha
        this.Administrador = false
    }
}
