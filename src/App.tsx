import 'antd/dist/reset.css';
import { Image } from 'antd';
import construction from './assets/under-construction.svg';

const App = () => {
  return (
    <div className='flex flex-col justify-center w-full p-8'>
      <h1 className='w-full p-4 text-lg font-bold text-center'>
        Natural Stone Dashboard on construction{' '}
      </h1>
      <div className='flex justify-center items-center h-screen'>
        <Image
          src={construction}
          alt='under construction'
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default App;
