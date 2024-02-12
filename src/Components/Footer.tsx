import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Link {
  title: string;
  href: string;
}

interface LinksBlock {
  blockTitle: string;
  links: Link[];
}

const linksData: LinksBlock[] = [
  {
    blockTitle: 'COMPANY',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Newsroom', href: '/newsroom' },
      { title: 'FAQ', href: '/faq' }
    ]
  },
  {
    blockTitle: 'GAMES',
    links: [
      { title: 'FlappyBird', href: '/' }
    ]
  }
]

function LinksColumn(props: LinksBlock) {
  return (
    <div className='block w-[45%] lg:w-full'>
      <span className='block mb-4 tracking-[3px] font-FiraMonoRegular text-[13px] text-primary dark:text-[#cccccc]'>{props.blockTitle}</span>
      <div className='flex flex-col gap-2 text-[14px]'>
        {props.links.map((link, index) => (
          <Link key={index} href={link.href} className='hover:text-[#009BDB] transition ease-in-out duration-300 cursor-pointer pr-3 whitespace-nowrap'>
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-secondary-bg dark:bg-primary-bg w-full py-14 subpixel-antialiased">
      <div className='block max-w-[1456px] mx-auto px-16'>
        <div className='flex gap-5 mb-10 items-center'>

          <Link href='https://www.reddit.com/r/BetterVoxel/' target="_blank" className='block fill-secondary-text hover:fill-[#009BDB] transition ease-in-out duration-300 cursor-pointer'>
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px">
              <path d="m201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zm302.5-49.5c0 137-111 248-248 248s-248-111-248-248 111-248 248-248 248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zm-68.9 116.2c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/company/bettervoxel/" target="_blank" className='block fill-secondary-text hover:fill-[#009BDB] transition ease-in-out duration-300 cursor-pointer'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="30px"
              height="30px">
              <path d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756 2.753 2.753 0 1 1 2.751 2.756zm2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z" />
            </svg>
          </Link>
          <Link href='' className='block fill-secondary-text hover:fill-[#009BDB] transition ease-in-out duration-300 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 42 42" width="30px" height="30px">
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
            </svg>
          </Link>
          <Link href='' className='block fill-secondary-text hover:fill-[#009BDB] transition ease-in-out duration-300 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 44 44" width="30px" height="30px">
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
            </svg>
          </Link>

        </div>

        {/* Links container */}
        <div className='inline-block flex-grow w-full'>

          <div className='flex flex-wrap gap-y-10 lg:gap-10 lg:flex-nowrap content-center lg:content-start justify-evenly lg:justify-start items-start w-fit place-content-start'>
            {linksData.map((block, index) => (
              <LinksColumn key={index} blockTitle={block.blockTitle} links={block.links} />
            ))}
          </div>

          {/* Divider */}
          <div className='w-full my-10 rounded border border-[#393B50]' />

          <div className='flex w-full justify-between gap-10'>
            <div className='flex flex-col gap-4'>

              <div className='font-BrutalRegular text-xs'>
                <span>© 2023, BetterVoxel, Inc. All rights reserved. BetterVoxel and its logo are BetterVoxel's trademarks or registered trademarks in France and elsewhere.</span>
              </div>

              <div className='flex flex-wrap text-xs gap-4 text-primary-text font-medium'>

                <Link href='/tos' className='hover:text-[#009BDB] transition ease-in-out duration-300 cursor-pointer whitespace-nowrap'>
                  <span>Terms of service</span>
                </Link>
                <Link href='/privacypolicy' className='hover:text-[#009BDB] transition ease-in-out duration-300 cursor-pointer whitespace-nowrap'>
                  <span>Privacy Policy</span>
                </Link>

              </div>
            </div>

            <Image
              src="/logoBlack.png"
              width={25}
              height={25}
              alt="BetterVoxel Logo"
              className='object-contain'
            />
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
