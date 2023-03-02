import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('limbo')} >En el limbo</button>
            <br />
            <button onClick={() => navigate('correctivo')} >Correctivo</button>
            <br />
            <button onClick={() => navigate('evolutivo')} >Evolutivo</button>
            <br />
            <button onClick={() => navigate('dtecnica')} >Deuda técnica</button>
        </div>
    )
}

export default Home