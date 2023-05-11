import { Paper } from '@mui/material';

import MainTable from './components/MainTable';
import styled from '@emotion/styled';
import CustomAppBar from './components/CustomAppBar';

const Root = styled('main')({
  height: '100vh',
  backgroundColor: 'wheat',
  overflow: 'auto',
});

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

function App() {
  return (
    <Root>
      <Container>
        <Paper elevation={3}>
          <CustomAppBar />
          <MainTable />
        </Paper>
      </Container>
    </Root>
  );
}

export default App;
