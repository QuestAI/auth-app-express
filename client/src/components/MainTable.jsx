import React, { useCallback, useMemo } from 'react';
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

import EmptyState from './EmptyState';
export default function MainTable() {
  const { data, isLoading, error } = useApi();
  const [showPassword, setShowPassword] = React.useState({});

  const handleClickShowPassword = useCallback(
    (id) => {
      setShowPassword((show) => {
        return {
          ...showPassword,
          [id]: !showPassword[id],
        };
      });
    },
    [showPassword]
  );

  const displayedRows = useMemo(() => {
    return (data?.users || []).map((row) => (
      <TableRow
        key={row.email}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <OutlinedInput value={row.email} fullWidth variant="outlined" />
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
    ));
  }, [data?.users, handleClickShowPassword, showPassword]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
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
            </>
          ) : displayedRows.length > 0 ? (
            displayedRows
          ) : (
            <TableRow key={Math.random().toString()}>
              <TableCell component={'th'} scope="row" width={'100%'}>
                <EmptyState />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
