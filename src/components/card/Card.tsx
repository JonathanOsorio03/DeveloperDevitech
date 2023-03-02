import { useNavigate } from "react-router-dom"
import { Button, Img, Container, Avatar } from "../../core"
import { Welcome } from "../../interfaces/interfaces"

export const Card = (props: Welcome) => {

    const navigate =useNavigate()
    return (
            <Container key={props.first_name}>
                <div className='contImgButt'>
                    <Avatar backgroundColor={props.status}>
                        <Img src={props.picture} alt="img" />
                    </Avatar>
                    <div className='ContText'>
                        <h2>{props.first_name} {props.last_name}</h2>
                        <h4>Cell: {props.department}</h4>
                        <h4>Task: {props.task.title}</h4>
                    </div>
                </div>
                <Button onClick={()=>navigate(`/developers/${props.id}`)}>Ver perfil</Button>
            </Container>
    )
}
