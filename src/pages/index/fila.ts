import {Cliente} from "./cliente";

export class Fila{
  no_princ;
  no_atual;
  no_esq;
  count:number;
  date = new Date();
  base = null;
  senha:any;
  matricula = new Array();
  message:string;

  constructor()
  {
    //instancia e pega a data de hoje
    this.no_princ =  null;
    this.count = 0;
    this.base = '' +  this.date.getDate() + this.date.getMonth();
    console.log('Dia');
    console.log(this.date.getDate());
    console.log('Mes');
    console.log(this.date.getMonth());
  }

  public adic(matricula)
  {
      this.senha= '' + this.base + this.count;
      //para a fila vazia
      if(this.no_princ == null)
      {
          this.no_princ = new Cliente(this.senha, this.matricula[0]);
          this.count+=1;
          this.matricula.shift();
          //caso o primeiro fa fila tenham varias matriculas associadas
          if(matricula.length > 0)
          {
               var i:any;
               this.no_atual = this.no_princ;
               for(i in this.matricula)
               {
                    this.no_atual.prox_no = new Cliente(this.base + this.count, i);
                    this.no_atual = this.no_atual.prox_no;
                    this.count += 1;
                    return;
               }
          }else{
            return this.no_atual = this.no_princ;
          }
      }
      while(this.no_atual != null)
      {
        this.no_atual = this.no_atual.prox_no;
      }
      //adiiona um ou mais usuário
      var j:any;
      for(j in this.matricula)
      {
        this.no_atual.prox_no = new Cliente(this.base + this.count, i);
        this.no_atual = this.no_atual.prox_no;
        this.count += 1;
      }
      document.getElementById('senha').innerHTML = 'Senha: ' + this.senha;
  }

  public remove(senha)
{
    if(this.no_princ == null)
    {
      return
    }
    this.no_esq = null;
    this.no_atual = this.no_princ;
    if(this.senha == senha)
    {
      this.no_atual = this.no_atual.prox_no;
    }
    while(true)
    {
      this.no_esq = this.no_atual;
      this.no_atual = this.no_atual.prox_no;
      if(this.no_atual == null)
      {
        break;
      }
      if(this.senha == senha)
      {
        this.no_esq.prox_no = this.no_atual.prox_no;
        break;
      }
    }
}

public mostrarFila()
{
  this.no_atual = this.no_princ;
  this.message = "Lista de alunos que reservaram senhas:"
  var x:any
  for(x in this.matricula)
  {
    document.writeln('Senha: ' + this.no_atual.senha + ' | Matrícula: ' + this.no_atual.matricula);
    this.no_atual.prox_no;
  }
}
}
