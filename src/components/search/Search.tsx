import { ContInput, Input } from "../../core"
import { BiSearchAlt } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import * as SC from './Search.Styles';
export const Search = () => {
    return (
        <SC.sidebar>
        <SC.contIcon><HiUserGroup className="icon"/><h1>Estado de los desarrolladores</h1></SC.contIcon>
        <ContInput>
            <Input type="text" placeholder='Buscar' />
            <BiSearchAlt/>
        </ContInput>
    </SC.sidebar>
    )
}
