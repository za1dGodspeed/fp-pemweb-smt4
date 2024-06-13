import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';
import AddItem from './AddItem';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/berita');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items', error);

        }
    };

    return (
        <div>
            <AddItem fetchItems={fetchItems} />
            <h2>Daftar Berita</h2>
            {items.map(item => (
                <Item key={item.id_berita} item={item} fetchItems={fetchItems} />
            ))}
        </div>
    );
};

export default ItemList;