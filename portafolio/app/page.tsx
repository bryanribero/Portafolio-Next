import  Name  from '@/components/gen/name'
import  Opciones  from '@/components/gen/opciones'
import Iconos from '@/components/gen/iconos'
import SectionsAbout from '@/components/gen/sectionAbout'
import SkillComponent from '@/components/gen/skillComponent'
import '@/app/scroll-hidden.css'



export default function Home() {
  return (
   <div className="min-h-screen w-full bg-black grid grid-cols-[600px_1fr] gap-4">
  <div className='row-span-full flex flex-col justify-between ml-45'>
    <div className='relative z-10 mt-15'>
      <Name />
    </div>
    <div className='relative z-10 '>
      <Opciones />
    </div>
    <div className='relative z-10 mb-10'>
      <Iconos />
    </div>
  </div>
  <div className='relative col-span-1 z-10 mt-15 max-w-150 ml-90 overflow-y-auto custom-scrollbar-hidden'>
    <SectionsAbout />
    <div className='absolute top-220 left-0 w-full'>
      
    </div>
  </div>
</div>
  );
}
