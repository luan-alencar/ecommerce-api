export const MESSAGES = {
    COMMON: {
        CREATED: "Registro criado com sucesso.",
        UPDATED: "Registro atualizado com sucesso.",
        DELETED: "Registro removido com sucesso.",

    },

    USER: {
        NOT_FOUND: "Usuário não encontrado",
        EMAIL_ALREADY_EXISTS: "E-mail já cadastrado!"
    },

    COMPANY: {
        NOT_FOUND: "Empresa não encontrada!",
        INVALID_LOGO_URL: "URL de origem inválida!"
    },

    CATEGORY: {
        NOT_FOUND: "Categoria não encontrada!"
    },

      PRODUCT: {
        NOT_FOUND: "Produto não encontrado!"
    },

    AUTH: {
        UNAUTHORIZED: "Não autorizado.",
        FORBIDDEN: "Acesso negado.",
        INVALID_TOKEN: "Token inválido ou expirado.",
    },
} as const;