import React from 'react';
import portfolios from './Data/portfolios';
import PortfolioItem from './PortfolioItem';
function Portfolio() {
  return (
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-dols-1 grid-cols-2 grid cols-3 gap-4'>
            {portfolios.map(project =>(
                <PortfolioItem
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                />
            ))}
        </div>
      </div>
  );
}

export default Portfolio;