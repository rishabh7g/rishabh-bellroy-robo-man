import { useState } from 'react';

export const Counter = () => {
   const [count, setCount] = useState(0);
   return (
      <div>
         <h1 className='text-lg font-black'>
            Update the count and edit src/App.tsx, state is preserved
         </h1>
         <button
            className='bg-blue-300 p-2 py-1'
            onClick={() => setCount((c) => c + 1)}
         >
            Count - {count}
         </button>
      </div>
   );
};