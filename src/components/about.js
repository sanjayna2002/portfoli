import PictureImg from '../asserts/picture.jpg';

export default function About(){
 
  const config={

       line1:'Hi, Im sanjay a skilled software developer with around 1 year and 2 months of',
       line2:'professional experience in developing web',
       line3:'applications using C#,JavaScript,HTML,CSS,Reactjs and',
       line4:'Cosmos DB.',
       line5:'Proficient in assisting in the development',
       line6:'of multiple web applications,gaining experience with',
       line7:'ASP.NET and C#.',
       line8:'Excels at working within fast-paced',
       line9:'environments to produce high-quality web',
       line10:'applications and websites for an enviable client',
       line11:'list.',
       line12:'Good exposure to Radzen components,Bootstrap',
       line13:'and ADO.NET framework.Capable of adapting quickly',
       line14:'to new environment and technologies.'

  }
 
    return<section  id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2'>
       <img src={PictureImg} />
        </div>
        <div className=' md: w-1/2 md:flex-row flex-col flex justify-center py-8'>
        <div className='flex flex-col justify-center'>
         <h1 className='text-4xl border-primary text-white border-b-4 mb-5 w-[170px]  font-bold'>About me</h1>
         <div className='text-white py-4'>
         <p >{config.line1}</p>
                                     <p>{config.line2} </p>
                                     <p>{config.line3} </p>
                                     <p>{config.line4}</p>
                                     <br/>
                                   <p>{config.line5} </p>
                                   <p>{config.line6}</p>
                                   <p>  {config.line7}</p>
                                   <br/>
                                     <p >{config.line8}</p>
                                     <p>{config.line9}</p>
                                     <p>{config.line10}</p>
                                     <p>{config.line11}</p>
                                     <br/>
                                         <p >{config.line12}</p>
                                         <p>{config.line13}</p>
                                         <p>{config.line14}</p>
         </div>
         
         </div>
        </div>
    </section>
}





