class ContaBancaria {

	constructor (agencia, numero, tipo, saldo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = saldo;
	}

	get saldo () {
		return saldo;
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

	deposito (valorDeposito) {
		this._saldo = this._saldo + valorDeposito;
		return 'Deposito realizado com sucesso. Novo saldo é de: ' + this._saldo;
	}

}

class ContaCorrente extends ContaBancaria {
	
	constructor (agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'Conta Corrente';
		this._cartaoCredito = cartaoCredito;
	}

	get cartaoCredito () {
		return this.cartaoCredito;
	}

	set cartaoCredito (cartaoCredito) {
		this._cartaoCredito = cartaoCredito;
	}

}

class ContaPoupanca extends ContaBancaria {
	constructor (agencia, numero, tipo) {
		super(agencia, numero)
		this.tipo = 'Poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor (agencia, numero, cartaoCredito) {
		super(agencia, tipo);
		this.tipo =  'Conta Universitária'
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