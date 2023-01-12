import  {Container,Button,Texto } from './styles'

interface IBotaoProps{
    texto:string
}

export default function Botao(props:IBotaoProps) {
  return (
    <Container>
        <Button>
            <Texto>
                {props.texto}
            </Texto>
        </Button>

    </Container>
    
  )
}
