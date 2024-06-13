import React, { useState } from 'react';
import axios from 'axios';

const AddItem = ({ fetchItems }) => {
    const [judul_berita, setName] = useState('');
    const [ringkasan, setQuantity] = useState('');

    const addItem = async () => {
        try {
            await axios.post('http://localhost:5000/berita/add', { judul_berita, ringkasan });
            fetchItems();
            setName('');
            setQuantity('');

        } catch (error) {
            console.error('Error adding item', error);
        }
    };

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Tambahkan Berita</h2>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Judul"
                        value={judul_berita}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ringkasan"
                        value={ringkasan}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary btn-block" onClick={addItem}>Tambah</button>
            </div>
        </div>
    );
};

export default AddItem;