
 class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'Guerreiro':
                ataque = 'espada';
                break;
            case 'Mago':
                ataque = 'magia';
                break;
            case 'Monge':
                ataque = 'artes marciais';
                break;
            case 'Ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
                break;
        }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
 }

 const heroi1 = new Heroi('Arthur', 30, 'Guerreiro');
 heroi1.atacar();

 const heroi2 = new Heroi('Merlin', 150, 'Mago');
 heroi2.atacar();

 const heroi3 = new Heroi('Bruce', 40, 'Monge');
 heroi3.atacar();

 const heroi4 = new Heroi('Naruto', 18, 'Ninja');
 heroi4.atacar();

 const heroi5 = new Heroi('Zorro', 18, 'desconhecido');
 heroi5.atacar();

