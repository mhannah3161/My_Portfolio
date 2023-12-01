import React from 'react';


function Intro() {
  return (
    <>
      <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-4xl md:text-7x1 dark:text-white mb-1 mb:mb-3 font-bold'>Michael Hannah</h1>
        <p className='text-base md:text-xl mb-3 font-meduim'>Web Developer</p>
        <p className='text-sm max-w-xl mb-6 font-bold'>I'm a full-stack web developer creating useful, fun, and creative apps for eveyone to enjoy. All of these coding projects are built from the ground up. Hours of planning and desigining have gone into each project.
        <br /> All of my code can be accessed on my github account{' '} 
        <a
        href='https://github.com/mhannah3161'
        target='_blank'
        className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
        rel='noreferrer noopener'
        >
        Mhannah3161
        </a> {' '}
        plus more projects that are in the works. I look forward to hear from you. 
        <br />
        Click to download my{' '}
        <a
        href='../../Resume.pdf'
        download={true}
        target='_blank'
        className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
        rel='noreferrer noopener'
        >
          resume.
        </a>{''}
        </p>
      </div>
    </>
  );
}

export default Intro;