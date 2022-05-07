class ContaBancaria {

	constructor (agencia, numero, tipo, saldo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = saldo;
	}

	get saldo () {
		return this._saldo;
	}

	set saldo (saldo) {
		this._saldo = saldo;
	}

	sacar (valorSaque) {
		if (this._saldo >= valorSaque) {
			this._saldo = this._saldo - valorSaque;
			return 'Saque de R$' + valorSaque
		} else {
			return 'Não há saldo suficiente.'
		}
	}

	depositar (valorDeposito) {
		this._saldo = this._saldo + valorDeposito;
		return 'Deposito realizado com sucesso. Novo saldo é de: ' + this._saldo;
	}

}

class ContaCorrente extends ContaBancaria {
	
	constructor (agencia, numero, saldo, cartaoCredito) {
		super(agencia, numero, 'Conta Corrente', saldo);
		this._cartaoCredito = cartaoCredito;
	}

	get cartaoCredito () {
		return this._cartaoCredito;
	}

	set cartaoCredito (valorCartao) {
		this._cartaoCredito = valorCartao;
	}

}

class ContaPoupanca extends ContaBancaria {
	constructor (agencia, numero, saldo) {
		super(agencia, numero, 'Poupança', saldo)
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor (agencia, numero, saldo) {
		super(agencia, numero, 'Conta Universitária', saldo);
	}

	saque (valorSaque) {
		if (valorSaque > 500) {
			return 'Não é possível sacar valor igual ou maior que R$ 500,00'
		} else if (this._saldo < valorSaque) {
			return 'Saldo insuficiente.'
		} else {
			this._saldo = this._saldo - valorSaque;
			return 'Saque de: ' + valorSaque;
		}
	}
}


let ct1 = new ContaCorrente('0001', '892739-1', 1200.40, '891273129');