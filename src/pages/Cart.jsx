import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../sectiones/Navbar';
import Footer from '../sectiones/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([])

    // Fetch data from local storage for Cart items
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];


    function getItems() {
        // Fetch product data from API
        const fetchItems = async () => {
            const response = await Promise.all(
                cartItems.map(async (item) => {
                    const response = await fetch(`https://fakestoreapi.com/products/${item.id}`);
                    const data = await response.json();
                    return { ...data, quantity: item.quantity };
                })
            );
            setCartProducts({ response });
        };
        fetchItems();
        localStorage.setItem("cartProducts", 
        JSON.stringify(cartProducts))
    }

    useEffect(() => {
        getItems();
    }, []);

    console.log(cartProducts)


    const setQuantity = (newQuantity) => {
        // Update quantity in local storage and cart state
        const updatedCart = [...cartItems];
        updatedCart.forEach((item) => {
            if (item.id === productId) {
                item.quantity = newQuantity;
            }
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartProducts(updatedCart);
    }



    return (
        <>
            <Navbar />
            <div className='wishlist py-16'>
                <div className="container m-auto">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link to={"/"} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Cart</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className='py-10'>
                        <table className="table-auto w-full border-separate border-spacing-y-4">
                            <thead>
                                <tr>
                                    <th className="py-2 text-start w-[30%]">Product</th>
                                    <th className="py-2 text-start">Price</th>
                                    <th className="py-2 text-start">Quantity</th>
                                    <th className="py-2 text-start">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProducts.response?.map((product) => (
                                    <tr className='border border-slate-100 shadow-sm' key={product.id}>
                                        <td>
                                            <Link to={`/product/${product.id}`} className='flex flex-row items-center mr-2'>
                                                <div className=' w-20 h-20 p-1 overflow-hidden'>
                                                    <img className="object-cover rounded-lg" src={product.image} alt={product.title} />
                                                </div>
                                                <span className="ml-4 text-sm font-bold">{product.title.split(' ', 3).join(' ')}</span>
                                            </Link>
                                        </td>
                                        <td>
                                            <span className="text-md font-medium">{product.price}$ </span>
                                        </td>
                                        <td>
                                            <input className='w-14 sm:w-20 rounded-md' type="number" min="1" value={product?.quantity} onChange={(e) => setQuantity(e.target.value)} />
                                        </td>
                                        <td>
                                            <span className="text-md font-medium">{product.price * product.quantity}$ </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <Link to='/' className='text-black border border-gray-500 py-2 px-8 rounded-md hover:border-Secondary transition'>Return To Shop</Link>
                        <Link to='#' className='text-black border border-gray-500 py-2 px-8 rounded-md hover:border-Secondary transition'>Move All To Bag</Link>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 py-16'>
                        <div className='Coupon-Input flex flex-col lg:flex-row items-center lg:items-start'>
                            <input type="text" className='py-2 px-8 rounded-md text-center lg:text-start text-lg lg:mr-4 mb-4 lg:mb-0' placeholder="Coupon Code" />
                            <button href='#' className='text-white bg-Secondary py-2 px-8 rounded-md border border-Secondary hover:bg-white hover:text-Secondary transition text-lg'>Apply Coupon</button>
                        </div>
                        <div className='flex flex-col border border-gray-900 rounded-lg py-6 px-4'>
                            <span className="text-2xl font-bold mb-2">Cart Total</span>
                            <div className='mb-2 flex flex-row items-center justify-between border-b border-gray-300 py-2'>
                                <span className="text-xl font-medium">Subtotal: </span>
                                <span className="text-xl font-medium">{cartProducts.response?.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}$</span>
                            </div>
                            <div className='mb-2 flex flex-row items-center justify-between border-b border-gray-300 py-2'>
                                <span className="text-xl font-medium">Shipping: </span>
                                <span className="text-xl font-medium">Free</span>
                            </div>
                            <div className='mb-2 flex flex-row items-center justify-between py-2'>
                                <span className="text-xl font-medium">Total: </span>
                                <span className="text-xl font-medium">{cartProducts.response?.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}$</span>
                            </div>
                            <div className='flex justify-center'>
                            <Link to='/CheckOut' className='text-white bg-Secondary py-2 px-8 rounded-md border border-Secondary hover:bg-white hover:text-Secondary transition text-lg'>Procees to checkout</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
