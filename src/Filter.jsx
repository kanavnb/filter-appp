import React, { useState, useEffect } from 'react';

const DataFilter = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = () => {
            const mockData = [
                'Lion', 'Tiger', 'Elephant', 'Giraffe',
                'Zebra', 'Kangaroo', 'Panda', 'Penguin',
                'Koala', 'Leopard', 'Cheetah', 'Sloth'
            ];
            setData(mockData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataFilter;
