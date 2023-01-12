import { Button } from './styles'

interface IBotaoProps {
  texto: string
}

export default function Botao(props: IBotaoProps) {
  return (
    <Button>
      {props.texto}
    </Button>

  )
}
