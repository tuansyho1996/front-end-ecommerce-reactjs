import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Rating, TextField } from "@mui/material";
import TextFieldInput from "./TextFieldInput";
import { useState } from "react";
import TruncateMarkup from "react-truncate-markup"
import dayjs from "dayjs";



const TableReviews = ({ reviews, sorts, setSort }) => {
  return (
    <Paper className="mt-5 " sx={{ width: '100%' }}>
      <TableContainer className="bg-widget " >
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              <TableCell className="!bg-widget" align="left" colSpan={2}>
                Latest Accepted Reviews
              </TableCell>
              <TableCell className="!bg-widget" align="right" colSpan={3}>
                <TextFieldInput data={sorts} select={true} fullWidth={false} change={(value) => setSort(value.target.value)} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              reviews?.map((review, index) => {
                return (
                  <TableRow>
                    <TableCell align="left" >
                      <div className="flex gap-3">
                        <img className="w-20 h-auto rounded-md" src={review.img} alt="" />
                        <div>
                          <p className="text-lg font-bold">{review.firstName} {review.lastName}</p>
                          <p>{review.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left" >
                      <div className="flex gap-3">
                        <Rating
                          sx={{
                            '.MuiRating-icon': {
                              color: 'var(--yellow)'
                            }
                          }}
                          value={review.rating}
                          precision={0.5} />
                        <div>{review.rating}</div>
                      </div>
                    </TableCell>
                    <TableCell align="left" className="w-1/3"  >
                      <div className="border p-5 flex gap-5">
                        <TruncateMarkup lines={2}>
                          <span>
                            {review.text}
                          </span>
                        </TruncateMarkup>
                        <i className="icon-arrow-forward-outline" />
                      </div>
                    </TableCell>
                    <TableCell align="left" >
                      <div className="flex gap-3 items-center">
                        <i className="icon-clock2" />
                        <div>
                          <span className="text-base">{dayjs(review.timestamp).format('DD/MM/YYYY')}</span>
                          <br />
                          at {dayjs(review.timestamp).format('HH:mm')}
                        </div>

                      </div>
                    </TableCell>
                    <TableCell align="right" >
                      <i className="icon-dots-three-vertical" />
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
export default TableReviews