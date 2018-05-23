export class Cliente
{
  protected senha:any;
  protected matricula:any;
  protected prox_no:any;
  protected bloq;
  protected reserva;

  constructor(senha, matricula){
    this.senha =  senha;
    this.matricula = matricula;
    this.prox_no = 0;
    this.bloq = true;
    this.reserva = true;
}


  getSenha(){return this.senha;}

  setSenha(senha){this.senha = senha};

  getMatricula(){return this.matricula;}

  setMatricula(matricula){this.matricula = matricula;}
}
