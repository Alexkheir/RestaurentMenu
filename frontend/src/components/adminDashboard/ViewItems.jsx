function ViewItems() {
    const items = [
        { id: 1, name: "Burger", price: 5.99, image: "https://via.placeholder.com/150", description: "Delicious beef burger" },
        { id: 2, name: "Pizza", price: 8.99, image: "https://via.placeholder.com/150", description: "Cheesy pepperoni pizza" },
        { id: 3, name: "Pasta", price: 7.99, image: "https://via.placeholder.com/150", description: "Creamy Alfredo pasta" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-black">View Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                    <div key={item.id} className="border rounded-lg p-4 shadow-lg">
                        <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                        <p className="text-gray-700 mb-2">${item.price.toFixed(2)}</p>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewItems;