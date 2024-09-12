function AddEmployee() {
    const dummyEmployees = [
        { id: 1, name: "John Doe", position: "Manager", age: 30, salary: 50000, gender: "Male", email: "john@example.com" },
        { id: 2, name: "Jane Smith", position: "Chef", age: 25, salary: 40000, gender: "Female", email: "jane@example.com" },
        { id: 3, name: "Sam Brown", position: "Waiter", age: 22, salary: 30000, gender: "Male", email: "sam@example.com" },
        { id: 4, name: "Emily White", position: "Waiter", age: 22, salary: 30000, gender: "Female", email: "emily@example.com" },
        { id: 5, name: "Michael Green", position: "Waiter", age: 22, salary: 30000, gender: "Male", email: "michael@example.com" },
        { id: 6, name: "Sophia Black", position: "Waiter", age: 22, salary: 30000, gender: "Female", email: "sophia@example.com" },
        { id: 7, name: "James Blue", position: "Waiter", age: 22, salary: 30000, gender: "Male", email: "james@example.com" },
        { id: 8, name: "Olivia Gray", position: "Waiter", age: 22, salary: 30000, gender: "Female", email: "olivia@example.com" },
        { id: 9, name: "William Red", position: "Waiter", age: 22, salary: 30000, gender: "Male", email: "william@example.com" },
        { id: 10, name: "Ava Yellow", position: "Waiter", age: 22, salary: 30000, gender: "Female", email: "ava@example.com" },
        { id: 11, name: "Mason Purple", position: "Waiter", age: 22, salary: 30000, gender: "Male", email: "mason@example.com" },
        { id: 12, name: "Ella Orange", position: "Waiter", age: 22, salary: 30000, gender: "Female", email: "ella@example.com" },
        { id: 13, name: "Liam Pink", position: "Waiter", age: 22, salary: 30000, gender: "Male", email: "liam@example.com" },
        { id: 14, name: "Ava Brown", position: "Waiter", age: 22, salary: 30000, gender: "Female", email: "ava@example.com" },
        { id: 15, name: "Noah Green", position: "Waiter", age: 22, salary: 30000, gender: "Male", email: "noah@example.com" },
    ];

    return (
        <div className="flex flex-col items-start">
            <div className="w-full">
                <h2 className="text-xl font-bold mb-4 text-black">Employee List</h2>
                <ul className="flex flex-wrap gap-4">
                    {dummyEmployees.map(employee => (
                        <li key={employee.id} className="mb-4 p-4 border rounded-lg flex-1 min-w-[calc(50%-1rem)]">
                            <p><strong>Name:</strong> {employee.name}</p>
                            <p><strong>Position:</strong> {employee.position}</p>
                            <p><strong>Age:</strong> {employee.age}</p>
                            <p><strong>Salary:</strong> {employee.salary}</p>
                            <p><strong>Gender:</strong> {employee.gender}</p>
                            <p><strong>Email:</strong> {employee.email}</p>
                            <div className="flex space-x-2 mt-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Edit</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default AddEmployee;