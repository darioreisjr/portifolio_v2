import { Container, Icone } from './styles'

interface IIconeRedeSociaisProps {
    link: string
}


export default function IconeRedeSociais(props: IIconeRedeSociaisProps) {
    return (
        <Container>
            <Icone src={props.link} />
        </Container>
    )
}
