import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useApi from '../hooks/useApi';
import { Skeleton } from '@mui/material';
export default function MainTable() {
  const { data, isLoading, error } = useApi();
  const [showPassword, setShowPassword] = React.useState({});

  const handleClickShowPassword = (id) => {
    setShowPassword((show) => {
      return {
        ...showPassword,
        [id]: !showPassword[id],
      };
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="left">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <>
              <TableRow key={Math.random().toString()}>
                <TableCell component={'th'} scope="row">
                  <Skeleton variant="rounded" width={'100%'} height={60} />
                </TableCell>
                <TableCell align="left">
                  <Skeleton variant="rounded" width={'100%'} height={60} />
                </TableCell>
              </TableRow>
              <TableRow key={Math.random().toString()}>
                <TableCell component={'th'} scope="row">
                  <Skeleton variant="rounded" width={'100%'} height={60} />
                </TableCell>
                <TableCell align="left">
                  <Skeleton variant="rounded" width={'100%'} height={60} />
                </TableCell>
              </TableRow>
              <TableRow key={Math.random().toString()}>
                <TableCell component={'th'} scope="row">
                  <Skeleton variant="rounded" width={'100%'} height={60} />
                </TableCell>
                <TableCell align="left">
                  <Skeleton variant="rounded" width={'100%'} height={60} />
                </TableCell>
              </TableRow>
            </>
          ) : (
            (data?.users || []).map((row) => (
              <TableRow
                key={row.email}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <OutlinedInput
                    value={row.email}
                    fullWidth
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="left">
                  <OutlinedInput
                    value={row.password}
                    fullWidth
                    variant="outlined"
                    type={showPassword[row.email] ? 'text' : 'password'}
                    readOnly
                    disabled
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleClickShowPassword(row.email)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
