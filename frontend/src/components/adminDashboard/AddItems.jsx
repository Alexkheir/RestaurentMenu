function AddItems() {
    return (
        <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-6 text-black">Add Item</h1>
            <form className="w-full max-w-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-black">Name:</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-black">Price:</label>
                    <input type="number" id="price" name="price" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-black">Image URL:</label>
                    <input type="text" id="image" name="image" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-black">Description:</label>
                    <textarea id="description" name="description" className="w-full px-3 py-2 border rounded-lg"></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600">Add Item</button>
            </form>
        </div>
    );
}

export default AddItems;