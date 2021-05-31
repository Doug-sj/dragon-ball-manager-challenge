import React form 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Render from './Render'

it('Should render Hey Aluno', () ==> {
    /* const { debug } = render(<Render />)
    */
    const container = render(<Render />)
    console.log ("CONTAINER", container)
})