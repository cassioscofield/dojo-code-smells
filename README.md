## Dodo sobre code-smells e refatoração de código

---

## Exercício 1

- O código deve retornar a soma dos validores do CSV inputado, quando cada valor inputado for entre dois números inteiros (0 e 1000), se o valor inputado for fora desse intervalo, o valor deve ser ignorado e não somado. Se um número de entrada for negativo, deve retornar um erro.

### Casos de teste: 
1. se for inputado `''`, o retorno deve ser 0
1. se for inputado `'1'`, o retorno deve ser 1
1. se for inputado `'1,2,3'`, o retorno deve ser 6
1. se for inputado `'1,1001,3,4'`, o retorno deve ser 8

```
node add.test.js
```

### Questões
1. Identifique um casos de testes descritos no enunciado, mas não automatizado;
1. Implemente o caso de teste não contemplado;
1. Identifique pelo menos 3 code-smells no código atual;
1. Corrijá-os mantendo a mesma funcionalidade;

---

## Exercício 2

- O código deve retornar o status da assinatura ( REEMBOLSADA, PENDENTE, ATIVA ou INATIVA) se ela existir dependendo das flags reembolsada, expirada, ativa, nesta ordem, caso ela não exista ou não tenha id, deve retornar INEXISTENTE. Em caso de qualquer outro problema a função deve também retornar INEXISTENTE.

### Casos de teste: 
1. se for inputado o objeto abaixo o retorno deve ser `PENDENTE`
```
{
    id: 'A',
    assinatura: {
        id: 1,
        ativa: true,
        expirada: true,
        reembolsada: false,
    }
}
```
2. se for inputado o objeto abaixo o retorno deve ser `ATIVA`
```
{
    id: 'B',
    assinatura: {
        id: 2,
        ativa: true,
        expirada: false,
        reembolsada: false,
    }
}
```
3. se for inputado o objeto abaixo o retorno deve ser `INATIVA`
```
{
    id: 'C',
    assinatura: {
        id: 3,
        ativa: false,
        expirada: false,
        reembolsada: false,
    }
}
```
4. se for inputado o objeto abaixo o retorno deve ser `REEMBOLSADA`
```
{
    id: 'D',
    assinatura: {
        id: 4,
        ativa: false,
        expirada: false,
        reembolsada: true,
    }
}
```

5. se for inputado o objeto abaixo o retorno deve ser `INEXISTENTE`
```
{
    id: 'E',
    assinatura: {}
}
```

```
node getStatusAssinatura.test.js
```

### Questões
1. Identifique dois casos de testes descritos no enunciado, mas não contemplados na implementação;
1. Implemente-os;
1. Identifique pelo menos 3 code-smells no código; atual
1. Corrijá-os mantendo a mesma funcionalidade;

---
#### Baseado em:
https://www.testim.io/blog/javascript-code-smells/
https://osherove.com/tdd-kata-1