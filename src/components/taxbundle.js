export default function TaxBundle(){

  const config={

    line1:'TaxBundle is an IRS-authorized e-file service',
    line2:'provider that helps businesses and individuals',
    line3:'easily and securely file multiple IRS forms',
    line4:'like 7004,8868,4868,2350,2290,8849,2290 Amendment',
    line5:'The application is build using technologies like c#,React Js,',
    line6:'Javascript , HTML , CSS , Bootstrap, Cosmos.'
  }
    return<section id='project'className="bg-primary justify-center">
    <div>
    <h1 className="text-white text-4xl px-4 py-6 text-center">Tax Bundle</h1>
  <div className="text-center text-white py-4">
   
                                 <p>{config.line1}</p>
                                 <p>{config.line2}</p>
                                 <p>{config.line3}</p>
                                 <p>{config.line4}</p>
                                 <div className="py-7">
                                 <p>{config.line5}</p>
                                 <p>{config.line6}</p>
                                 </div>
    </div>
    </div>
    
</section>
}