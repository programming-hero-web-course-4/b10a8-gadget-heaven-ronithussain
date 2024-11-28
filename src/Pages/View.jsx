import React from 'react';
import { useLoaderData } from 'react-router-dom';

const View = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            {
                data.map(view => (
                    <div key={view.id}> Id:{view.length}</div>
                ))
            }
        </div>
    );
};

export default View;