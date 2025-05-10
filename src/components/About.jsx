import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.ibb.co/rRkx6R4f/Soft-Sell-Final-Logo.jpg"
                            className=" w-auto object-contain mr-3"
                            alt="softsell Logo"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Resell your software licences easily and efficiently
                        </h2>
                        <p className="mt-6 text-gray-600">
                            We help individuals and businesses securely resell unused software licences,
                            saving money and reducing waste. Join a trusted platform with verified buyers 
                            and sellers.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
