import { ContInput, Input } from "../../core"
import './Search.css'
import { BiSearchAlt } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
export const Search = () => {
    return (
        <div className='sidebar'>
        <div className="contIcon"><HiUserGroup className="icon"/><h1>Estado de los desarrolladores</h1></div>
        <ContInput>
            <Input type="text" placeholder='Buscar' />
            <BiSearchAlt/>
        </ContInput>
    </div>
    )
}
