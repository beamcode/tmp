import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Victor',
    description: 'Project Manager / Engine developer',
    imageUrl: 'https://avatars.githubusercontent.com/u/72014694?v=4',
    githubUrl: 'https://github.com/GameboyColor32',
  },
  {
    id: 2,
    name: 'Jules',
    description: 'Backend Developer',
    imageUrl: 'https://avatars.githubusercontent.com/u/71990410?v=4',
    githubUrl: 'https://github.com/Jules-be',
  },
  {
    id: 3,
    name: 'Mathieu',
    description: 'Engine Developer',
    imageUrl: 'https://avatars.githubusercontent.com/u/57088933?v=4',
    githubUrl: 'https://github.com/jj136975',
  },
  {
    id: 4,
    name: 'Maxime',
    description: 'Engine Developer',
    imageUrl: 'https://avatars.githubusercontent.com/u/57402477?v=4',
    githubUrl: 'https://github.com/Maxime-Verrier',
  },
  {
    id: 5,
    name: 'Samuel',
    description: 'Frontend Web Developer',
    imageUrl: 'https://avatars.githubusercontent.com/u/73224590?v=4',
    githubUrl: 'https://github.com/beamcode',
  },
  {
    id: 6,
    name: 'Clovis',
    description: 'Engine Developer',
    imageUrl: 'https://raw.githubusercontent.com/Visclodev/Visclodev/main/super-logo.gif',
    githubUrl: 'https://github.com/Visclodev',
  },
  {
    id: 7,
    name: 'Dominique',
    description: 'Editor Developer',
    imageUrl: 'https://avatars.githubusercontent.com/u/72014218?v=4',
    githubUrl: 'https://github.com/varakdom',
  },
  {
    id: 8,
    name: 'Hildebert',
    description: 'Editor Developer',
    imageUrl: 'https://avatars.githubusercontent.com/u/71980289?v=4',
    githubUrl: 'https://github.com/Hilden13',
  },
  {
    id: 9,
    name: 'Thomas',
    description: 'New member',
    imageUrl: 'https://avatars.githubusercontent.com/u/72011124?v=4',
    githubUrl: 'https://github.com/osvegn',
  }
]

export default function Download() {
  return (
    <div className="flex flex-col items-center justify-between font-Inter">

      <div className="flex flex-col mx-auto w-full md:w-2/3 ps-10 pr-10 mb-20 mt-10 gap-20">
        <div className='space-y-10'>
          <h1 className="text-5xl font-extrabold">About us</h1>
          <p className="text-lg text-gray-500">BetterVoxel is an innovative voxel-based game engine designed to streamline and accelerate the development of voxel-based games. Developed by a dedicated team of nine students as their capstone project, BetterVoxel aims to simplify the game development process, allowing creators to bring their voxel-based worlds to life with ease and efficiency. Our mission is to empower developers by providing a robust, user-friendly platform that fosters creativity and innovation in the realm of voxel game development.</p>
        </div>

        <div className='space-y-10'>
          <h1 className="text-5xl font-extrabold">Team members</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-primary-text">
            {teamMembers.map((member) => (
              <div key={member.id} className="rounded-lg overflow-hidden shadow-lg bg-secondary-bg">
                <img className="w-full" src={member.imageUrl} alt={member.name} />
                <div className="p-5 h-[180px] flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-xl">{member.name}</div>
                    <p className="text-secondary-text text-base">
                      {member.description}
                    </p>
                  </div>
                  <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-200 transition-all hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 w-fit">GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div >
  )
}
