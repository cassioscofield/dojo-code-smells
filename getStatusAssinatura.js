function getStatusAssinatura(usuario) {
    if (usuario) {
        if (usuario.assinatura && usuario.assinatura.id) {
            if (usuario.assinatura.id) {
                if (usuario.assinatura.reembolsada) {
                    return 'REEMBOLSADA';
                } else if (usuario.assinatura.expirada) {
                    return 'PENDENTE';
                } else if (usuario.assinatura.ativa) {
                    return 'ATIVA';
                }
                return 'INATIVA';
            } else {
                return 'INEXISTENTE';
            }
        } else {
            return 'INEXISTENTE';
        }
    } else {
        return 'INEXISTENTE';
    }
}

module.exports = getStatusAssinatura;