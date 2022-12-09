
import { Container, Spinner } from './styles';

import {useTheme} from 'styled-components/native';

export function Loading(){
  
  const theme = useTheme();

  return (
    <Container>
      <Spinner size='large' color={theme.colors.attention}/>
    </Container>
  );
}