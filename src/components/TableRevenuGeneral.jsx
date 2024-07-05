import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, } from "@mui/material"



const TableRevenuGeneral = ({ rows, bg = '', width = '100%' }) => {
  return (
    <TableContainer component={Paper}
      style={{
        backgroundColor: bg ? bg : '',
        width: width
      }}
    >
      <Table aria-label="simple table" padding="checkbox" >
        <TableHead>
          <TableRow >
            <TableCell>Year</TableCell>
            <TableCell >Customers</TableCell>
            <TableCell >Trend</TableCell>
            <TableCell >Revenu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.year}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.year}
              </TableCell>
              <TableCell >{row.customers}</TableCell>
              <TableCell >{row.trend}</TableCell>
              <TableCell >{row.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default TableRevenuGeneral