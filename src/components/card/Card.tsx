import { Button, Img, Container } from "../../core"
import { Welcome } from "../../interfaces/interfaces"

export const Card = (props:Welcome) => {
    return (
        <Container key={props.first_name}>
            <div className='contImgButt'>
                <Img src={props.picture} alt="img" />
                <div className='ContText'>
                    <h2>{props.first_name} {props.last_name}</h2>
                    <h4>Estado: {props.status}</h4>
                    <h4>Tarea: {props.task.title}</h4>
                </div>
            </div>
            <Button>Ver perfil</Button>
        </Container>
    )
}
