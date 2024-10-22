let products = [
    {
    name: "Laptop",
    price: 999.00,
    description: "A high-performance laptop for work and gaming",
    image: "laptop.jpg" },
    {
    name: "Smartphone",
    price: 599.00,
    description: "A smartphone with a large screen and powerful processor",
    image: "smartphone.jpg" },
    {
    name: "Headphones",
    price: 199.00,
    description: "Sound-enhanced headphones with Bluetooth connectivity",
    image: "headphones.jpg" },
];

for (let i = 0; i < products.length; i++) {
    let productItem = products[i]

    let productName = document.createElement ("h2")
    productName.textContent = productItem.name
    let productDescription = document.createElement ("p")
    let productImage = document.createElement ("img")
    productImage.src = "images/" ${ productItem.image}

    let sectionProduct = document.getElementById
    
} 
