import * as SC from "./Modal.Styles";
import { FaTimes } from "react-icons/fa"

 const Modal = ({ isOpen, onClose, children }: any) => {
    return (
        <SC.Modal style={{ display: isOpen ? 'grid' : 'none' }}>
            <SC.ModalDialog>
                <SC.ButtonClose onClick={onClose}>{<FaTimes />}</SC.ButtonClose>
                {children}
            </SC.ModalDialog>
        </SC.Modal>
    )
}

export default Modal