import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Rating } from '@mui/material';

const TableListData = ({ data = [] }) => {
  const colorBG = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-sky-500'
      case 'confirmed':
        return 'bg-green'
      case 'cancelled':
        return 'bg-red'
      case 'refunded':
        return 'bg-gray'
      default:
        return 'bg-yellow'
    }
  }
  return (
    <TableContainer sx={{ backgroundColor: 'var(--widget)' }} component={Paper}>
      <Table  >
        <TableHead>
          <TableRow>
            <TableCell>order</TableCell>
            <TableCell align="left">product</TableCell>
            <TableCell align="left">sku</TableCell>
            <TableCell align="left">category</TableCell>
            <TableCell align="left">payment</TableCell>
            <TableCell align="left">order status</TableCell>
            <TableCell align="left">rate</TableCell>
            <TableCell align="left">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row.orderNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                #{row.orderNumber}
              </TableCell>
              <TableCell align="left">{row.product?.name}</TableCell>
              <TableCell align="left">{row.sku}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">
                {
                  row.payment.amount === row.payment.received ?
                    <>
                      <p>${row.payment.amount}</p>
                      <p>Fully paid</p>
                    </>
                    :
                    <>
                      <p>${row.payment.received}/from {row.payment.amount}</p>
                      {
                        row.payment.received === 0 ?
                          <p>Unpaid</p> :
                          <p>Partially paid</p>
                      }
                    </>
                }
                {

                }
              </TableCell>
              <TableCell align="left">
                <button className={`px-10 py-3 rounded-full text-base ${colorBG(row.status)}`}>
                  {row.status}
                </button>
              </TableCell>
              <TableCell align="left">
                <Rating value={row.rating} />
              </TableCell>
              <TableCell align="left">
                <div className="flex gap-3">
                  <i className='icon-pencil text-2xl' />
                  <i className='icon-dots-three-vertical text-2xl' />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableListData