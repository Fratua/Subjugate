import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Marketplace = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`/api/marketplace`);

            setItems(result.data);
            setIsLoading(false);
        };

        fetchItems();
    }, []);

    return (
        <div id="marketplace">
            <h1>Marketplace</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {items.map(item => (
                        <div key={item._id}>
                            <h2>{item.name}</h2>
                            <p>Price: {item.price}</p>
                            <p>Seller: {item.seller}</p>
                            <button>Buy</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Marketplace;