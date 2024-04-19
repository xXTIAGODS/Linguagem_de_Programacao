class Estudante {
    constructor(nome, email, ra, curso, disciplinas) {
        this.nome = nome;
        this.email = email;
        this.ra = ra;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }

    primeiraDisciplina() {
        return this.disciplinas[0];
    }

    ultimaDisciplina() {
        return this.disciplinas[this.disciplinas.length - 1];
    }
}

console.log("");

// Exemplos
const estudante1 = new Estudante(
    "Bill Gates",
    "Bill@fatec.com",
    "123456",
    "Análise e Desenvolvimento de Sistemas",
    ["Cálculo I", "Contabilidade", "Programação I"]
);

const estudante2 = new Estudante(
    "Elon Musk",
    "musk@fatec.com",
    "654321",
    "Engenharia",
    ["Desenho Técnico", "Cálculo", "Física"]
);

console.log("Estudante 1:");
console.log("Nome:", estudante1.nome);
console.log("E-mail:", estudante1.email);
console.log("RA:", estudante1.ra);
console.log("Curso:", estudante1.curso);
console.log("Primeira Disciplina:", estudante1.primeiraDisciplina());
console.log("Última Disciplina:", estudante1.ultimaDisciplina());
console.log("");

console.log("Estudante 2:");
console.log("Nome:", estudante2.nome);
console.log("E-mail:", estudante2.email);
console.log("RA:", estudante2.ra);
console.log("Curso:", estudante2.curso);
console.log("Primeira Disciplina:", estudante2.primeiraDisciplina());
console.log("Última Disciplina:", estudante2.ultimaDisciplina());