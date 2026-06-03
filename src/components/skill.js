


export default function Skill(){

  const config={

    line1:'Languages : C Sharp , Javascript,HTML,CSS,SQL,ReactJs.',
    line2:'Framework : ASP.NET core ,Entity Framework.',
    line3:'Databases : SQL server,MYSQL,Cosmos DB.',
    line4:'Experience in working with operating systems',
    line5:'like windows and mobile application.',
    line6:'Familiar with visual studio and Web API.',
    line7:'Familiar with Git and Github.'
  }
    return<section className="bg-secondary justify-center">
        <div className="py-8 text-center">
        <h1 className="text-white text-4xl py-6 ">My skills</h1>
      <div className=" text-white py-4">

                                 <p>{config.line1}</p><br/>
                                 <p>{config.line2}</p><br/>
                                 <p>{config.line3}</p><br/>
                                 <p>{config.line4}</p>
                                 <p>{config.line5}</p><br/>
                                 <p>{config.line6}</p><br/>
                                 <p>{config.line7}</p><br/>
        
        </div>
        </div>
        
    </section>
}