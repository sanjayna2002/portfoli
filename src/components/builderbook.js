export default function Builderbook(){

  const config={

    line1:'This application provides building contractor with a',
    line2:'reliable and secure solution for managing their',
    line3:'accounting processes , empowering them to make',
    line4:'informed decisions and streamline their financial operations.',
    line5:'The application is build using technologies like C# ,ASP.NET ,',
    line6:'Javascript , HTML , CSS , Bootstrap, Cosmos DB and Blazor.'
  }
    return<section id='project'className="bg-primary justify-center">
    <div>
    <h1 className="text-white text-4xl px-4 py-6 text-center">Builderbook</h1>
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