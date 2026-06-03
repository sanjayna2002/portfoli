export default function Workexp(){
     const config={
        line1:'A skilled software developer around 1 year and 2 month of experience',
        line2:'in Galominds technologies.'
     }
    return<section id='skill'className='flex flex-col md:flex-row bg-white px-5 py-8'>
    <div className='py-5 md:w-1/2'>
   <h1 className="text-black text-4xl py-6 ">Work Experience</h1>
   <div className='text-black'>
   <p>{config.line1}</p> 
   <p>{config.line2}</p>
   </div>

    </div>
    <div className=' md: w-1/2 flex justify-center py-6'>
    <div className='flex flex-col justify-center'>
    <h1 className="text-black text-4xl py-6 ">Education</h1>
    <p className="text-primary text-bold text-1xl">2020 – 2024</p>
    <p className='text-black'>
Bachelor of Computer Science
Engineering,<br/> CAPE Institute of
technology.

   </p>

     
     </div>
    </div>
</section>
}