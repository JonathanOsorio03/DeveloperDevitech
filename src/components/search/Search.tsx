import { ContInput, Input } from "../../core"
import { BiSearchAlt } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import * as SC from './Search.Styles';
import { useNavigate } from "react-router-dom";

export const Search = ({ Title }: any) => {

    const navigate = useNavigate();

    return (
        <SC.sidebar>
            <SC.contIcon><div><HiUserGroup className="icon" onClick={() => navigate('*')} /></div><div>Estado de los desarrolladores {Title}</div></SC.contIcon>
            <ContInput>
                <Input type="text" placeholder='Buscar' />
                <BiSearchAlt />
            </ContInput>
        </SC.sidebar>
    )
}
