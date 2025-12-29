export const MESSAGES = {
  /* ==========================
   * COMMON (GENÉRICO)
   * ========================== */
  COMMON: {
    CREATED: "Registro criado com sucesso.",
    UPDATED: "Registro atualizado com sucesso.",
    DELETED: "Registro removido com sucesso.",
  },

  /* ==========================
   * USER
   * ========================== */
  USER: {
    NOT_FOUND: "Usuário não encontrado.",
    EMAIL_ALREADY_EXISTS: "E-mail já cadastrado.",
  },

  /* ==========================
   * COMPANY
   * ========================== */
  COMPANY: {
    NOT_FOUND: "Empresa não encontrada.",
    INVALID_LOGO_URL: "URL da logo inválida.",
  },

  /* ==========================
   * CATEGORY
   * ========================== */
  CATEGORY: {
    NOT_FOUND: "Categoria não encontrada.",
    HAS_PRODUCTS: "Não é possível excluir uma categoria com produtos relacionados.",
  },

  /* ==========================
   * PRODUCT
   * ========================== */
  PRODUCT: {
    NOT_FOUND: "Produto não encontrado.",
  },

   /* ==========================
   * PAYMENT METHOD
   * ========================== */
  PAYMENT_METHOD: {
    NOT_FOUND: "Forma de Pagamento não encontrada." 
    
  },

  /* ==========================
   * UPLOAD
   * ========================== */
  UPLOAD: {
    EXTENSION_NOT_VALID: "A extensão do arquivo não é válida.",
    IMAGE_NOT_VALID: "A imagem precisa ser PNG ou JPEG.",
  },

  /* ==========================
   * AUTH / SECURITY
   * ========================== */
  AUTH: {
    UNAUTHORIZED: "Não autorizado.",
    FORBIDDEN: "Acesso negado.",
    INVALID_TOKEN: "Token inválido ou expirado.",
  },

  /* ==========================
   * SYSTEM / ERRORS
   * ========================== */
  ERROR: {
    INTERNAL_SERVER_ERROR: "Erro interno do servidor.",
    PAGE_NOT_FOUND: "Página não encontrada.",
  },
} as const;
