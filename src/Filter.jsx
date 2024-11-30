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

    return <div>Data Filter Component</div>;
};

export default DataFilter;
