import React from 'react';

function PortfolioItem( title, imgeUrl, title, link) {
  return (
    <div className='border-2 border-stone-900 rounded-md overflow-hidden'>

        <img
            src= {imgeUrl}
            alt="porfolio"
            className='w-full h-36 md:h-48 object-cover cursor-pointer'
        />
        <div className='w-full p-4'>
            <h3 className='text-lg md:textxl mb-2 mb:mb-3 font-semibold'>{title}</h3>
            <p className='flex flex-wrap gap-2 felx row items-center justify-start text-xs md:text-sm'>
                {stack.map(item =>(
                    <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
                        {item}
                    </span>
                ))}
            </p>
        </div>
    </div>
    
  );
}

export default PortfolioItem;