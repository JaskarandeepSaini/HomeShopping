import Alert from 'react-bootstrap/Alert';

const MessageBox = (params) => {
  return <Alert variant={params.variant || 'info'}>{params.children}</Alert>;
};

export default MessageBox;
