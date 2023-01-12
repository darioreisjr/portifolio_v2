import { Container, Imagem } from './styles'

interface IAvatarProps {
    linkImagem: string
}


export default function Avatar(props: IAvatarProps) {
    return (
        <Container>
            <Imagem src={props.linkImagem}/>
        </Container>
    )
}
