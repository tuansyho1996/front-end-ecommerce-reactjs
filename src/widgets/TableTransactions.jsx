import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material"
import dayjs from "dayjs"
import { formatNumberBasic } from "@utils/helpers"

const total = (fee, tax) => {
  return fee - (fee / 100 * tax)
}

const TableTransactions = ({ transactions }) => {
  return (
    <TableContainer className="!bg-widget !rounded-lg mt-5" component={Paper}>
      <Table aria-label="simple table">
        <TableHead className="uppercase ">
          <TableRow
            sx={{
              '.MuiTableCell-head': {
                color: 'var(--accent)!important'
              }
            }}
          >
            <TableCell align="left">Date & Time</TableCell>
            <TableCell align="left">Seller</TableCell>
            <TableCell align="left">Sku</TableCell>
            <TableCell align="left">Method</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">Curr</TableCell>
            <TableCell align="left">Fee</TableCell>
            <TableCell align="left">Tax</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions?.map((row) => {
            return (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  <div className="flex gap-1">
                    <i className="icon-clock2 mt-1 text-accent" />
                    <div>
                      {dayjs(row.timestamp).format('DD/MM/YYYY')}<br />
                      at {dayjs(row.timestamp).format('hh:mm A')}
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <div className="flex gap-3 items-center">
                    <img className="w-10" src={row.seller.logo} alt="" />
                    <span>{row.seller.name}</span>
                  </div>
                </TableCell>
                <TableCell align="left">{row.sku}</TableCell>
                <TableCell align="left">{row.method}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.country}</TableCell>
                <TableCell align="left">{row.currency}</TableCell>
                <TableCell align="left">{row.fee}</TableCell>
                <TableCell align="left">{row.tax}</TableCell>
                <TableCell align="left">
                  {formatNumberBasic(parseInt(total(row.fee, row.tax) * 100) / 100, '$')}
                </TableCell>
              </TableRow>
            )
          }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableTransactions