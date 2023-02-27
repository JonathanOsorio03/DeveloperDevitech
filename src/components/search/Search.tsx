import { ContInput, Input } from "../../core"
import { BiSearchAlt } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import * as SC from './Search.Styles';
export const Search = () => {
    return (
        <SC.sidebar>
        <SC.contIcon><div><HiUserGroup className="icon"/></div><div>Estado de los desarrolladores</div></SC.contIcon>
        <ContInput>
            <Input type="text" placeholder='Buscar' />
            <BiSearchAlt/>
        </ContInput>
    </SC.sidebar>
    )
}
