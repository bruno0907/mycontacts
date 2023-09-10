import ToastMessage from '../ToastMessage';
import { Container } from './styles';
import { useToastContainer } from './useToastContainer';

export default function ToastContainer() {
  const { handleRemoveMessage, renderMessages } = useToastContainer();

  return (
    <Container>
      {renderMessages((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      ))}
    </Container>
  );
}
