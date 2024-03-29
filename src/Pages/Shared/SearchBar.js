import React from 'react';

const SearchBar = ({ products, placeholder }) => {
    return (
        <div className='w-1/2'>
            <form className="flex items-center">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>

                    <input type="text" id="voice-search" className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white" placeholder={placeholder} required />

                    <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                        <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <button type="submit" className="inline-flex justify-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-orange-500 rounded-lg border hover:bg-orange-600  dark:bg-blue-600 dark:hover:bg-blue-700">
                    <svg aria-hidden="true" className="mr-2 ml-1 w-5 h-6" fill="none" stroke="currentColor" viewBox="0 0 10 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </form>
            <div>
                {/* {
                    products.map((value, key) => {
                        return <Link>{value.name}</Link>
                    })
                } */}
            </div>
        </div>
    );
};

export default SearchBar;