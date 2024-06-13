import React, { useState } from 'react';
import axios from 'axios';

const EditItem = ({ item, fetchItems }) => {
    const [name, setName] = useState(item.name);
    const [quantity, setQuantity] = useState(item.quantity);

    const updateItem = async () => {
        try {
            await axios.put(`http://localhost:5000/berita/update/${item.id}`, { name, quantity });
            fetchItems();
        } catch (error) {
            console.error('Error updating item', error);
        }
    };

    return (
        <div>
            <h2>Edit Item</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}

            />
            <button onClick={updateItem}>Update</button>
        </div>
    );
};

export default EditItem;