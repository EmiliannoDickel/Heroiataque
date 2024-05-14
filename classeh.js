class Heroi { 
    constructor (nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  ataque() {
    let ataque;
    switch (this.tipo) {
        case "mago":
            ataque = "uma magia";
            break;
        case "guerreiro":
            ataque = "uma espada";
            break;
        case "monge":
            ataque = "golpes de artes marciais";
            break;
        case "ninja":
            ataque = "uma shuriken";
        break;
        default:
            ataque = "Ataque indefinido";
    }
    console.log(`O ${this.tipo} atacou com ${ataque}`);
  }
}

let Emilianno = new Heroi ("Garen", "25", "guerreiro")
Emilianno.ataque(); 

let Mago01 = new Heroi ("Mbappe", "24", "ninja")
Mago01.ataque();
