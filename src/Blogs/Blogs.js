import React from 'react';
import js from '../Assets/js.png'
import react from '../Assets/react.png'
import mongodb from '../Assets//mongodb.jpg'
import express from '../Assets/express.jpg'
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='mt-48 lg:mt-36'>
            <h1 className='text-4xl font-bold text-center text-purple-500'>Blogs</h1>
            <h1 className='text-md font-semibold text-center text-purple-500'>Blogs about modern web and technologies</h1>
            <div className='flex flex-wrap justify-between gap-3 mx-10 my-10'>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to='/'>
                        <img class="rounded-t-lg" src={js} alt="" />
                    </Link>
                    <div class="p-5">
                        <Link to='/'>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">JavaScript vs java</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Java is an OOP programming language, and it helps to create applications that function in a virtual machine or browser, while JavaScript is an OOP scripting language. Also, the JavaScript code runs on a browser only.</p>
                        <Link to='/' class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to='/'>
                        <img class="rounded-t-lg" src={react} alt="" />
                    </Link>
                    <div class="p-5">
                        <Link to='/'>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                        <Link to='/' class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to='/'>
                        <img class="rounded-t-lg" src={express} alt="" />
                    </Link>
                    <div class="p-5">
                        <Link to='/'>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Node and Express</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
                        <Link to='/' class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to='/'>
                        <img class="rounded-t-lg" src={mongodb} alt="" />
                    </Link>
                    <div class="p-5">
                        <Link to='/'>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Is MongoDb NoSql ?</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">NoSQL databases come in a variety of types including document databases, key-values databases, wide-column stores, and graph databases. MongoDB is the world's most popular NoSQL database.</p>
                        <Link to='/' class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Blogs;