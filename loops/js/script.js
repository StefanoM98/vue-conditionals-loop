const {createApp} = Vue;

createApp({
    data() {
        return {
            names: ["Claudio", "Antonio", "Paola", "Olga"],
            student: {
                name: 'Olga',
                lastname: 'Demina',
                age: 37
            },
            selectedProduct: 0,
            products: [
                {
                    name: "Latte",
                    price: 1.50,
                    weight: "1kg"
                },
                {
                    name: "arance",
                    price: 2,
                    weight: "1kg"
                },
                {
                    name: "Pane",
                    price: 0.75,
                    weight: "0.25kg"
                },
            ]
        }
    }

}).mount("#app")