import React,{ useState } from 'react';
import { ChatTeardropDots } from 'phosphor-react';

// Import Components
import { WidgetForm } from './WidgetForm/WidgetForm';

// Import PopOver
import { Popover } from '@headlessui/react';

export function Widget() {
 return(
   <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
     <Popover.Panel>
       <WidgetForm />
     </Popover.Panel>

   <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
      <ChatTeardropDots className='w-6 h-6' />

      <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
        <span className='pl-2 '></span>
        Feedbacks
      </span>
   </Popover.Button>
   </Popover>
 );
}

/*
Overflow hidden esconde tudo que envolve o sppan(exemplo)
A ideia aqui é aparecer o texto "Feedbacks" quando o user passar o mouse

group + group-hover:max-w-xs (função acima)
*/

/*
 { isWidgetOpen ? <p>Test Canedo</p> : null }
                    =
 { isWidgetOpen && <p>Test Canedo</p> }                     
*/