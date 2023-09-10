import PropTypes from 'prop-types';

import Sad from '../../../../assets/images/sad.svg';
import { Container } from './styles';
import { Button } from '../../../../components/Button';

export function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={Sad} alt="SadFace" />
      <div className="errorDetails">
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>
        <Button onClick={onTryAgain}>Tentar Novamente</Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
