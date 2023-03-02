import { Button, Img, Container, Avatar, ModalBody } from "../../core"
import { Welcome } from "../../interfaces/interfaces"
import Accordion from "../accordion/Accordion"
import Modal from "../modal/Modal"
import { useState } from "react"
import { AiOutlinePhone, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"

export const Card = (props: Welcome) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
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
                <Button onClick={() => setOpen(true)} >Ver perfil</Button>
            </Container>

            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <ModalBody>
                    <div className="containerModal">
                        <Avatar backgroundColor={props.status}>
                            <Img src={props.picture} alt="img" width="10.25rem" height="10.25rem" />
                        </Avatar>
                    </div>
                    <h2>{props.first_name} {props.last_name}</h2>
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <div className="containerButton">
                        <button className="phonebutton"><AiOutlinePhone size={30} /></button>
                        <button className="whpbutton"><AiOutlineWhatsApp size={30} /></button>
                        <button className="emailbutton"><AiOutlineMail size={30} /></button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}
