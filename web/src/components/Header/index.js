import { LogoImg } from '../../assets/images';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={LogoImg} alt="MyContacts logo" />
    </Container>
  );
}
