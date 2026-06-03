export default function Roles(){

  const config={

    line1:'Scrum Project Management – Implemented agile',
    line2:'methodologies , leading to improved project delivery',
    line3:'speed and adaptability to changing business needs.',
    line4:'Work to design algorithms and flowcharts , Produced',
    line5:'clean efficient code based on specifications.',
    line6:'Developed the front ui for web application using javascript.',
    line7:'Developed a reusable multi file upload module ',
    line8:'one can upload different types of files.'
  }
    return<section id='roles' className="flex min-h-[calc(120dvh-3.5rem)] w-full items-center bg-white px-5 py-12 md:px-8 justify-center">
    <div>
    <h1 className="text-black text-4xl px-4 py-12 text-center">Roles and Responsibilities</h1>
  <div className="text-center text-black py-12">
    
  <p>{config.line1}</p>
  <p> {config.line2}</p>
   <p>{config.line3}</p>
   <br/>
  <p >{config.line4} </p>
  <p>{config.line5}</p>
  <br/>
  <p >{config.line6}</p>
  <br/>
    <div className="py-6">
  <p >{config.line7}</p>
 <p>{config.line8} </p>
 </div>

    </div>
    </div>
    
</section>
}