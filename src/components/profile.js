

import DevloperImg from '../asserts/devloper.png';
import { AiOutlineGithub ,AiOutlineInstagram,AiOutlineLinkedin,} from "react-icons/ai";

export default function Profile(){
    const config={
        subtitle:'I am Full- stack Developer',
        GitHub:'https://github.com/sanjaygalominds',
        Instagram:'https://www.instagram.com/sanjay.46__/',
        Linkedin:'https://www.linkedin.com/in/sanjay-n-a-211206330/',
        
    }
return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className=' md:w-1/2 flex-col'>
    <h1 className=' text-white text-6xl font-devloper-font'>Hi,<br/> Im <span className='text-black'> NA </span> sanjay
    <br/><p className='text-2xl'></p>{config.subtitle}</h1>
    <div className='flex py-10'>
        <a href={config.GitHub} className='pr-5 hover:text-white'><AiOutlineGithub  size={40}/>
        </a>
        <a href={config.Instagram} className='pr-5  hover:text-white'><AiOutlineInstagram size={40}/>
        </a><a href={config.Linkedin}className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/>
        </a>
        
    </div>
    </div>
    
<img
  className='md:w-1/3'
  src={DevloperImg}
  alt="Sanjay - Full Stack Developer"
/>    
</section>
}