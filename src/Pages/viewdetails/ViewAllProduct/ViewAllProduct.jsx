import React, { useState } from 'react';
import useData from '../../../Hooks/useData';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import { FaEye } from 'react-icons/fa';

const ViewAllProduct = () => {
    const { product } = useData();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = product.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <section>
                <SectionTitle subtitle={"Today's"} title={"Our All Product"} />
            </section>
            
            {/* Search Input Field */}
            <div className="p-5">
                <input
                    type="text"
                    placeholder="Search Products... 🔍"
                    className="input input-bordered w-80 bg-white outline-none border-red-500 "
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid md:grid-cols-4 p-5 md:p-0 gap-5 my-10 relative">
                {filteredProducts.map((item) => (
                    <Link to={`/viewdetails/${item.id}`} key={item.id}>
                        <div className="rounded-md">
                            <div className="w-full bg-slate-50">
                                <img className="h-52 p-5 md:w-[80%] m-auto" src={item.img} alt={item.title} />
                            </div>
                            <h1 className="text-xl font-bold my-4">{item.title}</h1>
                            <h1 className="text-red-500 mb-5 text-lg font-semibold">${item.price}</h1>
                            <Rating
                                name="simple-controlled"
                                value={item.rating}
                                readOnly // Make rating read-only to avoid changing it
                            />
                            <h1>
                                <button>
                                    <FaEye />
                                </button>
                            </h1>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center my-5">
                <Link to='viewall'>
                    <button className="bg-red-400 px-8 py-1 text-white rounded-md">
                        View All Products
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ViewAllProduct;
