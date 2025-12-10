import {describe,expect,test} from 'vitest'
import {render,screen} from '@testing-library/react'
import PizzaList from '../Pizza';
import '@testing-library/jest-dom'
import type { Pizza } from '../../../Domain/entities/Pizza';

describe('pizza page test',async()=>{

test('should be alt name same as image name',()=>{
   const name ="my favorite Pizza"
   const image = "https://picsum.photos/200"
   const description ="image"
   const pizzaPayload:Pizza ={name,image,description}
   render(<PizzaList pizza={pizzaPayload} />)
   const imgTag = screen.getByRole('img');
   const hTag= screen.getByRole('heading', { level: 1 });
   const descTag= screen.getByRole('paragraph');
   expect(imgTag.src).toBe(image)
   expect(imgTag.alt).toBe(image)
   expect(hTag).toBeInTheDocument()
   expect(descTag).toBeInTheDocument()
})

})