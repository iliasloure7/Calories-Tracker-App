import { Flex } from './styles/layout/Flex.styled';
import { StyledInput } from './styles/Input.styled';

function InputGroup({ labelText, placeholder, text, setText }) {
  return (
    <Flex direction='column' gap='0.3rem' style={{ flexBasis: '50%' }}>
      <label htmlFor={labelText}>{labelText}</label>
      <StyledInput
        type='text'
        placeholder={placeholder}
        id={labelText}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Flex>
  );
}

export default InputGroup;
