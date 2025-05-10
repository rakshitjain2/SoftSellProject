import React from 'react'
import { Link } from 'react-router';
import Card from './Card';

const HomeP = () => {
   return (
        <div className="mx-auto w-full max-w-7xl bg-blue-50">
            <div className="">
                <div className='pt-8 '>
                    <h1 className=' text-4xl font-bold flex items-center justify-center '>Welcome to SoftShell</h1>
                    <p className=" pb-4 text-gray-600 flex items-center justify-center">
                        You can resell your licence here
                    </p>
                    <Link
                        to="/sellhere"
                        className="flex items-center justify-center text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
                    >
                        Sell Here!!
                    </Link>
                </div>
            </div>
            <div className='py-14 '>
                <h1 className='text-3xl font-bold mb-8'>How It Works</h1>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <Card title={"Upload license"} description={'Upload license easily'} />
                    <Card title={"Get Verified"} description={'Get easily verified no tough process'} />
                    <Card title={"Get Paid!!"} description={'Get paid securely and fast'} />
                </div>
            </div >
            <div className='py-14 '>
                <h1 className='text-3xl font-bold mb-8'>Why Choose Us!?</h1>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <Card title={"Best Market Value"} description={'Maximize your return'} />
                    <Card title={"Easy Process"} description={'No diffucult process just upload your licence and get verified within few hours'} />
                    <Card title={"Trusted by Thousands "} description={'Get paid securely and fast as soon as your licence get verified you are paid'} />
                    <Card title={"Secure Transfers"} description={'We ensure secure transfer so that you do not have to worry'} />
                </div>
            </div >
            <div className='py-14 '>
                <h1 className='text-3xl font-bold mb-8'>Customer Testimonials</h1>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <Card title={"Amit Mishra"} description={'CEO at TechNerd'} />
                    <Card title={"Sourav Jain"} description={'Owner of IndusHome'} />
                    
                </div>
            </div >
            


        </div>
    );
}

export default HomeP