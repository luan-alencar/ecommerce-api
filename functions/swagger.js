import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Nara Bolos API',
        description: `
API para gestão de pedidos, produtos e clientes da Nara Bolos.

⚠️ A aplicação possui APENAS 3 administradores fixos:
- Luan Alencar (luanalencar134@gmail.com)
- Quenia Sinara (slimakenia5@gmail.com)
- Kaiã Lucca

Não existe cadastro público de administradores.
        `
    },
    servers: [
        {
            url: 'http://127.0.0.1:5001/e-commerce-api-571d8/us-central1/api',
            description: 'Dev'
        },
        {
            url: 'https://us-central1-e-commerce-api-571d8.cloudfunctions.net/api',
            description: 'Prod'
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        },
        schemas: {

            /* =========================
               ADMINS FIXOS
            ========================= */
            AdminsFixos: {
                admins: [
                    {
                        nome: "Luan Alencar",
                        email: "luanalencar134@gmail.com",
                        role: "ADMIN"
                    },
                    {
                        nome: "Quenia Sinara",
                        email: "slimakenia5@gmail.com",
                        role: "ADMIN"
                    },
                    {
                        nome: "Kaiã Lucca",
                        role: "ADMIN"
                    }
                ]
            },

            login: {
                $email: "luanalencar134@gmail.com",
                $password: "123456"
            },

            recovery: {
                $email: "slimakenia5@gmail.com",
            },

            User: {
                id: "admin-01",
                nome: "Luan Alencar",
                email: "luanalencar134@gmail.com",
            },

            /* =========================
               CLIENTES
            ========================= */
            addCustomer: {
                $nome: "João da Silva",
                $telefone: "11999999999",
            },

            /* =========================
               PRODUTOS (BOLOS)
            ========================= */
            addProduct: {
                $nome: "Bolo de Chocolate",
                descricao: "Bolo de chocolate com cobertura cremosa",
                $preco: 89.90,
                imagem: null,
                ativa: true,
            },

            updateProduct: {
                $nome: "Bolo de Chocolate Gourmet",
                descricao: "Bolo de chocolate com recheio especial",
                $preco: 99.90,
                imagem: null,
                $ativa: false,
            },

            /* =========================
               FORMAS DE PAGAMENTO
            ========================= */
            addPaymentMethod: {
                $descricao: "Pix",
                ativa: true,
            },

            updatePaymentMethod: {
                $descricao: "Cartão de Crédito",
                $ativa: false,
            },

            /* =========================
               PEDIDOS
            ========================= */
            addOrder: {
                $cliente: {
                    $nome: "João da Silva",
                    $telefone: "11999999999",
                },
                endereco: {
                    $logradouro: "Rua das Flores",
                    $numero: "100",
                    $bairro: "Centro",
                    $cidade: "Campina Grande",
                    $uf: "PB"
                },
                $isEntrega: true,
                $formaPagamento: {
                    descricao: "Pix",
                },
                $items: [{
                    $produto: {
                        nome: "Bolo de Chocolate",
                    },
                    $qtde: 1,
                    observacao: "Sem granulado",
                }],
                status: {
                    "@enum": ["pendente"]
                },
                observacoes: "Entregar após às 15h",
            },

            updateOrderStatus: {
                $status: {
                    "@enum": ["pendente", "em_preparo", "pronto", "entregue", "cancelado"]
                },
            },
        },
        parameters: {
            dataInicio: {
                name: 'dataInicio',
                in: 'query',
                description: 'Data de início do filtro no formato YYYY-MM-DD',
                schema: {
                    type: 'date'
                }
            },
            dataFim: {
                name: 'dataFim',
                in: 'query',
                description: 'Data de fim do filtro no formato YYYY-MM-DD',
                schema: {
                    type: 'date'
                }
            },
            orderStatus: {
                name: 'status',
                in: 'query',
                description: 'Status do pedido',
                schema: {
                    type: 'string',
                    enum: ['pendente', 'em_preparo', 'pronto', 'entregue', 'cancelado']
                }
            }
        }
    },
    tags: [
        {
            name: "Auth",
            description: "Autenticação dos administradores da Nara Bolos"
        },
        {
            name: "Customers",
            description: "Clientes da Nara Bolos"
        },
        {
            name: "Products",
            description: "Catálogo de bolos"
        },
        {
            name: "Payment Methods",
            description: "Formas de pagamento"
        },
        {
            name: "Orders",
            description: "Pedidos de bolos"
        }
    ],
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/index.ts'];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
