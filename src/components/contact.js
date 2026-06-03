

export default function Contact(){

  const config={

    line1:'sanjayna2020cse@gmail.com',
    line2:'8838021190.'
  }

    return<section id='contact' className="flex min-h-[calc(100dvh-3.5rem)] w-full items-center bg-white px-5 py-12 md:px-8 justify-center">
    <div>
    <h1 className="text-black text-4xl px-4 py-4 text-center">Contact</h1>
  <div className="text-center text-black py-4">
   <p className="py-4">
    IF you want to discuss more in details,please contact more
   </p>
  <p className="py-4">
   <span className="font-bold ">Email : </span>{config.line1}
  </p>
<p className="py-4">
<span className="font-bold">Phone no : </span>{config.line2}
</p>


    </div>
    </div>
    
</section>
}