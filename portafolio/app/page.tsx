import  Name  from '@/components/gen/name'
import  Opciones  from '@/components/gen/opciones'
import Iconos from '@/components/gen/iconos'


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black ">
      <div className='flex'>
       <div className="flex flex-col justify-space-between items-center">
        <div className='relative z-10 mt-15'> 
          <Name />
        </div>
        <div className='relative z-10 '>
          <Opciones />
        </div>
        <div className='relative z-10 '>
          <Iconos />
        </div>
       </div>
      <div>
      </div>
      </div>
    </div>
  );
}
