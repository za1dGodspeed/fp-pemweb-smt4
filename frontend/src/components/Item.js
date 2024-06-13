import React from 'react';
import axios from 'axios';

const Item = ({ item, fetchItems }) => {
    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/berita/delete/${id}`);
            fetchItems();
        } catch (error) {
            console.error('Error deleting item', error);
        }

    };

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h3 className="card-title">{item.judul_berita}</h3>
                <p className="card-text">{item.ringkasan}</p>
                <button className="btn btn-danger btn-block" onClick={() => deleteItem(item.id_berita)}>Hapus</button>
            </div>
        </div>
    );
};

export default Item;