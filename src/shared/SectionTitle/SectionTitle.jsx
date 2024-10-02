import React from 'react';

const SectionTitle = ({subtitle,title}) => {
    return (
        <div className='my-20'>

            <p className='text-red-500 border-l-8 border-red-500 rounded-s-md p-1'> {subtitle} </p>

            <h1 className='text-3xl uppercase border-y-2  my-3 py-2 '>{title}</h1>
            
        </div>
    );
};

export default SectionTitle;