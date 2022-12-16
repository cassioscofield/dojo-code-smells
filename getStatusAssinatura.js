function getStatusAssinatura(usuario) {
    if (!usuario || !usuario.assinatura || !usuario.assinatura.id) { 
        return 'INEXISTENTE';
    }
    
    if (usuario.assinatura.reembolsada) {
        return 'REEMBOLSADA';
    }
    
    if (usuario.assinatura.expirada) {
        return 'PENDENTE';
    } 
    
    if (usuario.assinatura.ativa) {
        return 'ATIVA';
    }

    return 'INATIVA';
}

module.exports = getStatusAssinatura;

// Code
// if aninhado
// 5x