var users = [
    {
        id: 1,
        name: "Waiter 1",
        passcode: 1212
    },
    {
        id: 2,
        name: "Jonh Dept",
        passcode: 1111
    }
];
var tables = [
    {
        id:1,
        title: "Table 1",
        type:"table",
        hall:1,
        clients: 0
    },
    {
        id:2,
        title: "Vip",
        type:"table",
        hall:1,
        clients: 0
    },
    {
        id:7,
        title: "Shipping",
        type:"shipping",
        hall:0,
        clients: 1
    },
    {
        id:8,
        title: "Takeaway",
        type:"takeaway",
        hall:0,
        clients: 1
    },
];
var halls = [
    {
        id:1,
        title: "Hall 1"
    },
    {
        id:2,
        title: "Hall 2"
    },
    {
        id:3,
        title: "Hall 3"
    },
    {
        id:4,
        title: "Hall 4"
    },
    {
        id:5,
        title: "Hall 5"
    }
];
var categories = [
    {
        id: 1,
        title: "Pizza",
        image: "pizza.jpg",
        parent:0
    },
    {
        id: 2,
        title: "Drinks",
        image: "drinks.jpg",
        parent:0
    },
     {
        id: 3,
        title: "Hot drinks",
        image: "pizza.jpg",
        parent:2
    },
     {
        id: 4,
        title: "Cool drinks",
        image: "pizza.jpg",
        parent:2
    }
];
var products = [
    {
        id: 1,
        title: "Marqaritta1",
        price: "25",
        image: "pizza.jpg",
        category: 1,
        cancelled:false,
        reason: "",
        count:1,
        sizes:[{id:1,title: "small",price:"25", selected:false}, {id:2, price: "25",title: "middle", selected:false}],
        addition: [
            {
                id: 1,
                title: "Marqaritta",
                price: "25",
                image: "pizza.jpg",
                category: 1,
                count: 0
            },
            {
                id: 2,
                title: "Marqaritta",
                price: "25",
                image: "pizza.jpg",
                category: 1,
                count: 0
            }
        ]

    },
    {
        id: 3,
        title: "Italiano",
        price: "53",
        image: "pizza.jpg",
        cancelled:false,
        reason: "",
        count:1,
        category: 1,
        sizes:[{id:3,title: "Small", price: "7.50",selected:false}, {id:4,title: "Middle", price:"8.40",selected:false}, {id:5,price:"9.80",title: "Big", selected:false}],
        addition: []

    },
    {
        id: 2,
        title: "Italiano",
        price: "53",
        image: "pizza.jpg",
        cancelled:false,
        reason: "",
        count:1,
        category: 1,
        sizes:[],
        addition: []

    },
    {
        id: 4,
        title: "Cola",
        price: "53",
        image: "pizza.jpg",
        cancelled:false,
        reason: "",
        count:1,
        category: 4,
        sizes:[],
        addition: []

    },
    {
        id: 5,
        title: "Cofe",
        price: "53",
        image: "pizza.jpg",
        cancelled:false,
        reason: "",
        count:1,
        category: 3,
        sizes:[],
        addition: []

    }
];
var orders = [];
var invoices = [];
var deleteReasons = ["test", "garson mistake", "chef mistake"]