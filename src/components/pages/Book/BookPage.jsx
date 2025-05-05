import React from 'react'
import RightLoader from '@/components/RightLoader'
import Table from '@/components/Table';
const BookPage = ({id}) => {
    const smallHeading = {
        title: 'Started:',
        time: '5 Days Ago'
      };
   
  return (
         
    <div >

        <div className='flex flex-wrap justify-between items-center'>

            <div className='w-[640px] '>
                <div className='text-3xl sm:text-4xl md:text-7xl font-[700]'>
                    <h1>Batman:{id}</h1>
                    <h1 className='md:whitespace-nowrap'>The Dark Knight</h1>
                    <p className='text-[1.1rem]  font-[200]  text-justify  md:text-lg md:font-[400] mt-8'>A book description is a brief summary of a book's plot, characters, and themes. It helps readers get a sense of what the book is about. Book descriptions are often found on the back cover of the book, or on retailer websites. </p>
                </div>
                
            </div> 
            <div className='flex justify-center  w-full md:w-auto'>
              <RightLoader heading="Book Progress" smallHeading={smallHeading} />
            </div>
            
         </div>

         <Table/>
           
    </div>
  )
}

export default BookPage
