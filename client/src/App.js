import { Paper } from '@mui/material';

import MainTable from './components/MainTable';
import styled from '@emotion/styled';
import CustomAppBar from './components/CustomAppBar';

const Root = styled('main')({
  height: '100vh',
  backgroundColor: 'wheat',
});

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  alignItems: 'center',
});

function App() {
  return (
    <Root>
      {/* <div>Header</div> */}
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
