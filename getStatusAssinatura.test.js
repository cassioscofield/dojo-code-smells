const getStatusAssinatura = require('./getStatusAssinatura.js');
let input, result;
console.log('teste');
const assert = function(result, expected, message) {
    if (result !== expected)
        throw Error(`Assert failed: result: ${result} expected: ${expected} ${message || ''}`);
};

input = {
    id: 'A',
    assinatura: {
        id: 1,
        ativa: true,
        expirada: true,
        reembolsada: false,
    }
};
result = getStatusAssinatura(input);
console.log({input, result});
assert(result, 'PENDENTE');

input = {
    id: 'B',
    assinatura: {
        id: 2,
        ativa: true,
        expirada: false,
        reembolsada: false,
    }
};
result = getStatusAssinatura(input);
console.log({input, result});
assert(result, 'ATIVA');

input = {
    id: 'C',
    assinatura: {
        id: 3,
        ativa: false,
        expirada: false,
        reembolsada: false,
    }
};
result = getStatusAssinatura(input);
console.log({input, result});
assert(result, 'INATIVA');

input = {
    id: 'D',
    assinatura: {
        id: 4,
        ativa: false,
        expirada: false,
        reembolsada: true,
    }
};
result = getStatusAssinatura(input);
console.log({input, result});
assert(result, 'REEMBOLSADA');


input = {
    id: 'E',
    assinatura: {}
};
result = getStatusAssinatura(input);
console.log({input, result});
assert(result, 'INEXISTENTE');