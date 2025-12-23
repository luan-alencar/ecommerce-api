import { Address } from "./address.model.js";
import { Company } from "./company.model.js"
import { Customer } from "./customer.model.js";
import { OrderItem } from "./order-item.model.js";
import { OrderStatus } from "./order-status.js";
import { PaymentMethod } from "./payment-method.model.js";

export type Order = {
    empresa: Company;
    cliente: Customer;
    endereco: Address;
    cpfCnpjCupom: PaymentMethod;
    data: Date;
    isEntrega: boolean;
    formaPagamento: PaymentMethod;
    taxaEntrega: number;
    item: OrderItem[];
    status: OrderStatus;
}