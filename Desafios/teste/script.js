const Amigo = {
	nome: 'Leonardo',
	idade: 26,
	aniversario(i=0){
		this.idade = this.idade + i
	}
}

console.log(Amigo)
console.log(Amigo.idade)
Amigo.aniversario()
console.log(Amigo.idade)