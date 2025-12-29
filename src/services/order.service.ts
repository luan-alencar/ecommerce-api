import { MESSAGES } from "../constants/messages.js";
import { NotFoundError } from "../errors/not-found.error.js";
import { Order } from "../models/order-model.js";
import { CompanyRepository } from "../repositories/company.repository.js";
import { OrderRepository } from "../repositories/order.repository.js";
import { PaymentMethodRepository } from "../repositories/payment-method.repository.js";
import { ProductRepository } from "../repositories/products.repository.js";

export class OrderService {
    private orderRepository: OrderRepository;
    private companyRepository: CompanyRepository;
    private paymentMethodRepository: PaymentMethodRepository;
    private productRepository: ProductRepository;

    constructor() {
        this.orderRepository = new OrderRepository();
        this.companyRepository = new CompanyRepository();
        this.paymentMethodRepository = new PaymentMethodRepository();
        this.productRepository = new ProductRepository();
    }

    async save(order: Order) {
        const companyID = this.companyRepository.getById(order.empresa.id!);
        if (!companyID) {
            throw new NotFoundError(MESSAGES.COMPANY.NOT_FOUND);
        }

        const formaPagamento = await this.paymentMethodRepository.getById(order.formaPagamento.id)
        if (!formaPagamento) {
            throw new NotFoundError(MESSAGES.PAYMENT_METHOD.NOT_FOUND)
        }

        order.formaPagamento = formaPagamento;

        for (let item of order.items) {
            const produto = await this.productRepository.getById(item.produto.id);
            if (!produto) {
                throw new NotFoundError(MESSAGES.PRODUCT.NOT_FOUND);
            }
            item.produto = produto;
        }
        await this.orderRepository.save(order);
    }
}