export default function Builderbook(){

  const config={

    line1:'This application provides building contractor with a',
    line2:'reliable and secure solution for managing their',
    line3:'accounting processes , empowering them to make',
    line4:'informed decisions and streamline their financial operations.',
    line5:'The application is build using technologies like C# ,ASP.NET ,',
    line6:'Javascript , HTML , CSS , Bootstrap, Cosmos DB and Blazor.',
    line7:'TaxBundle is an IRS-authorized e-file service',
    line8:'provider that helps businesses and individuals',
    line9:'easily and securely file multiple IRS forms',
    line10:'like 7004,8868,4868,2350,2290,8849,2290 Amendment',
    line11:'The application is build using technologies like c#,React Js,',
    line12:'Javascript , HTML , CSS , Bootstrap, Cosmos.'
  }
    return<section id='project'className="bg-white justify-center py-12">
    <div>
    <h1 className="text-black text-4xl py-8 text-center">Builderbook</h1>
  <div className="text-center text-black py-8">
   
                                 <p>{config.line1}</p>
                                 <p>{config.line2}</p>
                                 <p>{config.line3}</p>
                                 <p>{config.line4}</p>
                                 <div className="py-7">
                                 <p>{config.line5}</p>
                                 <p>{config.line6}</p>
                                 </div>
    </div>
        <h1 className="text-black text-4xl py-3 text-center">Tax Bundle</h1>
        <div className="text-center text-black py-8">
   
                                 <p>{config.line7}</p>
                                 <p>{config.line8}</p>
                                 <p>{config.line9}</p>
                                 <p>{config.line10}</p>
                                 <div className="py-7">
                                 <p>{config.line11}</p>
                                 <p>{config.line12}</p>
                                 </div>

    </div>
    </div>
    
</section>
}