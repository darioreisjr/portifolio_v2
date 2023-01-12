import { Container, Subtitulo, Titulo } from './styles'

interface ILetreiroProps {
    texto: string
    titulo: string
}


export default function Letreiro(props: ILetreiroProps) {
    return (
        <Container>
            <Subtitulo> {props.texto} </Subtitulo>
            <Titulo data-text={props.titulo}>{props.titulo}</Titulo>
        </Container>
    )
}
