import { Developers } from "../pages/index"

export const routes = [
    {
        path: "limbo",
        Component: () => <Developers Department="En el Limbo" Title="en el Limbo" />
    },
    {
        path: "correctivo",
        Component: () => <Developers Department="Correctivo" Title="correctivo" />
    },
    {
        path: "evolutivo",
        Component: () => <Developers Department="Evolutivo" Title="evolutivo" />
    },
    {
        path: "dtecnica",
        Component: () => <Developers Department="Deuda Técnica" Title="deuda técnica" />
    },
]