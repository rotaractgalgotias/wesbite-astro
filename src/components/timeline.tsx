import React from 'react'

function timeline() {
  return (
    <div>
      <div className="grid place-items-center mt-8">
        <div className="my-2 ps-2 first:mt-0">
           <h3 className="text-xs font-medium uppercase text-gray-500">1 Aug, 2023</h3>
        </div>
       
        <div className="flex gap-x-3">
           <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden ">
              <div className="relative z-10 flex size-7 items-center justify-center">
                 <div className="size-2 rounded-full bg-gray-400 "></div>
              </div>
           </div>
       
           <div className="grow pb-8 pt-0.5">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">
                 <svg className="mt-1 size-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" x2="8" y1="13" y2="13"></line>
                    <line x1="16" x2="8" y1="17" y2="17"></line>
                    <line x1="10" x2="8" y1="9" y2="9"></line>
                 </svg>
                 Created "Preline in React" task
              </h3>
              <p className="mt-1 text-sm text-gray-600">Find more detailed instructions here.</p>
              <img className="mt-2 w-full max-w-lg rounded-lg" src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODMyODh8MHwxfGFsbHwxfHx8fHx8fHwxNjU5NDQ1Mjgw&ixlib=rb-1.2.1&q=80&w=1080" alt="Unsplash Image" />
           </div>
        </div>
        <div className="flex gap-x-3">
           <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden ">
              <div className="relative z-10 flex size-7 items-center justify-center">
                 <div className="size-2 rounded-full bg-gray-400 "></div>
              </div>
           </div>
           
           <div className="grow pb-8 pt-0.5">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">Release v5.2.0 quick bug fix 🐞</h3>
              <img className="mt-2 w-full rounded-lg max-w-lg" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODMyODh8MHwxfGFsbHwxfHx8fHx8fHwxNjU5NDQ1Mjgw&ixlib=rb-1.2.1&q=80&w=1080" alt="Unsplash Image" />
           </div>
        </div>
      
        <div className="flex gap-x-3">
           <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden ">
              <div className="relative z-10 flex size-7 items-center justify-center">
                 <div className="size-2 rounded-full bg-gray-400 "></div>
              </div>
           </div>
          
           <div className="grow pb-8 pt-0.5">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">Marked "Install Charts" completed</h3>
              <p className="mt-1 text-sm text-gray-600">Finally! You can check it out here.</p>
              <img className="mt-2 w-full rounded-lg max-w-lg" src="https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODMyODh8MHwxfGFsbHwxfHx8fHx8fHwxNjU5NDQ1Mjgw&ixlib=rb-1.2.1&q=80&w=1080" alt="Unsplash Image" />
           </div>
        </div>
       
        <div className="my-2 ps-2 first:mt-0">
           <h3 className="text-xs font-medium uppercase text-gray-500">31 Jul, 2023</h3>
        </div>
        
        <div className="flex gap-x-3">
           <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden ">
              <div className="relative z-10 flex size-7 items-center justify-center">
                 <div className="size-2 rounded-full bg-gray-400 "></div>
              </div>
           </div>
          
           <div className="grow pb-8 pt-0.5">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">Take a break ⛳️</h3>
              <p className="mt-1 text-sm text-gray-600">Just chill for now... 😉</p>
              <img className="mt-2 w-full rounded-lg max-w-lg" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODMyODh8MHwxfGFsbHwxfHx8fHx8fHwxNjU5NDQ1Mjgw&ixlib=rb-1.2.1&q=80&w=1080" alt="Unsplash Image" />
           </div>
        </div>
     </div>
    </div>
  )
}

export default timeline
