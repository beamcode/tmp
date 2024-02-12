"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';
import LandingParalaxBackground from '@/Components/MovingBackground';

function InfoCard({
  url,
  title,
  paragraph
}: {
  url: string;
  title: string;
  paragraph: string;
}) {
  return (
    <div className='flex flex-col bg-[#323c4d] w-full rounded-md overflow-hidden relative'>

      <Image
        src={url}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: '100%',
          height: 260,
          objectFit: 'cover',
          objectPosition: 'top'  // This ensures the top of the image is aligned with the top of the container
        }}
        alt="Image description"
      />

      <div className='p-6 space-y-3'>
        <h1 className='text-slate-200 text-2xl font-bold '>{title}</h1>
        <p className='text-[#9cb3d9] text-lg'>{paragraph}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-between'>

      <LandingParalaxBackground />

      <motion.div
        className='w-full h-full'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center relative w-full h-[700px]">
          <div className="w-[1200px] h-full flex items-center">
            <pre className="transform text-[60px] text-white shadow-black font-Montserrat [text-shadow:_0px_6px_2px_rgb(0_0_0_/_30%)]">
              BetterVoxel. {'\n'}The voxel engine for the future.
            </pre>
          </div>
        </div>
      </motion.div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 90 1440 140">
        <path fill="#26282B" fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,186.7C480,171,600,149,720,154.7C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg> */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 80" className='fill-primary-bg dark:fill-secondary-bg'>
        <path fillOpacity="1" d="M0,128L60,112C120,96,240,64,360,64C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>

      <div className='flex flex-col py-20 px-56 gap-6 bg-primary-bg dark:bg-secondary-bg'>

        <h1 className="transform text-4xl text-primary-text dark:text-primary-text drop-shadow-xl shadow-black font-Montserrat">
          An intuitive way to make games
        </h1>
        <motion.div
          className='w-full h-full'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='flex w-full gap-5'>
            <InfoCard
              url="/innovative.webp"
              title="Ingenious Design"
              paragraph="Our voxel engine boasts an elegantly designed architecture and user-friendly interface, ensuring an effortlessly enjoyable development experience."
            />

            <InfoCard
              url="/language.jpg"
              title="Rust Based"
              paragraph="Rust excels in voxel game engine development with its high performance and safety, ideal for handling complex 3D worlds."
            />

            <InfoCard
              url="/2d.webp"
              title="2D game support"
              paragraph="Our versatile engine seamlessly supports both 3D and 2D game development, offering a flexible platform for creators to bring any vision to life."
            />
          </div>
        </motion.div>
      </div>

      <div className='flex w-full h-full pb-20 pt-0 px-56 justify-center  bg-primary-bg dark:bg-secondary-bg'>
        <motion.div
          className='w-full h-full'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            width="100%"
            height="500"
            src='https://www.youtube.com/embed/sjC3Hz-aSPY'
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className='rounded-md'
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
