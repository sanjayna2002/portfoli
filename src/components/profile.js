import DevloperImg from '../asserts/devloper.png'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai'

const config = {
  subtitle: 'I am a Full-Stack Developer',
  GitHub: 'https://github.com/sanjaygalominds',
  Instagram: 'https://www.instagram.com/sanjay.46__/',
  Linkedin: 'https://www.linkedin.com/in/sanjay-n-a-211206330/',
}

const SOCIAL_LINKS = [
  { href: config.GitHub, Icon: AiOutlineGithub, label: 'GitHub' },
  { href: config.Instagram, Icon: AiOutlineInstagram, label: 'Instagram' },
  { href: config.Linkedin, Icon: AiOutlineLinkedin, label: 'LinkedIn' },
]

export default function Profile() {
  return (
    <section id='home'className="flex min-h-[calc(100dvh-3.5rem)] w-full items-center bg-white px-5 py-8 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="font-devloper-font text-4xl leading-tight text-secondary sm:text-5xl md:text-6xl">
            Hi,
            <br />
            I&apos;m{' '}
            <span className="text-primary">NA</span> Sanjay
          </h1>
          <p className="mt-4 text-xl font-medium text-gray-600 sm:text-2xl">
            {config.subtitle}
          </p>

          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            {SOCIAL_LINKS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full bg-primary/10 p-3 text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <Icon size={32} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center md:w-5/12">
          <div className="overflow-hidden rounded-3xl bg-gray-50 p-4 shadow-lg ring-2 ring-secondary">
            <img
              className="h-auto w-full max-w-sm object-contain md:max-h-[min(480px,65vh)]"
              src={DevloperImg}
              alt="Sanjay - Full Stack Developer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
