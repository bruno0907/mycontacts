import EmptyBox from '../../../../assets/images/empty-box.svg';
import { Container } from './styles';

export function EmptyStatus() {
  return (
    <Container>
      <img src={EmptyBox} alt="Emtpy" />
      <p>
        Você ainda não tem nenhum contato cadastrado!
        Clique no botão <strong>”Novo contato”</strong> acima
        para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
