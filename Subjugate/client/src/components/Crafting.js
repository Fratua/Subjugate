import React, { useState, useEffect } from 'react';
import { socket } from '../utils/socket';

const Crafting = () => {
    const [craftingItems, setCraftingItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [craftingResult, setCraftingResult] = useState(null);

    useEffect(() => {
        socket.on('updateCraftingItems', data => {
            setCraftingItems(data);
        });
    }, []);

    const handleCrafting = () => {
        if (selectedItem) {
            socket.emit('craftItem', selectedItem);
            socket.on('craftingResult', data => {
                setCraftingResult(data);
            });
        }
    };

    const handleItemSelection = (event) => {
        setSelectedItem(event.target.value);
    };

    return (
        <div id="craftingTable">
            <h2>Crafting Table</h2>
            <select onChange={handleItemSelection}>
                {craftingItems.map((item, index) => (
                    <option key={index} value={item.id}>{item.name}</option>
                ))}
            </select>
            <button onClick={handleCrafting}>Craft</button>
            {craftingResult && <p>{craftingResult}</p>}
        </div>
    );
};

export default Crafting;