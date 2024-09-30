//Task 1

/*class Employee {
    constructor (name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor (name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Department: ${this.department}.`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод: John Smith
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод: Name: Jane Doe, Department: Sales*/

//Task 2

class Product {
    constructor(name, prise) {
        this.name = name;
        this.prise = prise;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.products.forEach(element => {
            totalPrice = totalPrice + element.prise
        });
        return totalPrice;
    }
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice()); // Вывод: 600