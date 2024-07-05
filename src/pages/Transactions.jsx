import PagesHeader from "@layouts/PagesHeader"
import RangeDate from "@ui/RangeDates"
import TextFieldInput from "@widgets/TextFieldInput"
import transactions from "@db/transactions"
import { Fragment, useEffect, useState } from "react"
import { Pagination } from "@mui/material"
import CustomPagination from "@components/CustomPagination"
import TableTransactions from "@widgets/TableTransactions"
import { sortTransactions } from "@utils/helpers"

const sort = ['Recent', 'Oldest', 'Amount:High to Low', 'Amount:Low to high']
const transactionsPerPage = 6

const Transactions = () => {
  const [pageActive, setPageActive] = useState(1)
  const [sortActive, setSortActive] = useState('Recent')
  const [transactionsShow, setTransactionsShow] = useState(null)
  useEffect(() => {
    let copyTransactions = [...transactions]
    if (pageActive === transactions.length / transactionsPerPage + 1) {
      copyTransactions = sortTransactions(copyTransactions, sortActive).slice(pageActive * transactionsPerPage - transactionsPerPage, transactions.length)
    }
    else {
      copyTransactions = sortTransactions(copyTransactions, sortActive).slice(pageActive * transactionsPerPage - transactionsPerPage, pageActive * transactionsPerPage)
    }
    console.log(copyTransactions.length)
    setTransactionsShow(copyTransactions)
  }, [sortActive, pageActive])
  return (
    <Fragment>
      <PagesHeader title='Transactions' />
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <div className="text-lg font-bold">
            Transaction date form:
          </div>
          <RangeDate />
        </div>
        <div className="flex gap-3 flex-col">
          <div>
            View transactions:{transactionsPerPage}/{transactions.length}
          </div>
          <TextFieldInput select={true} data={sort} change={(event) => setSortActive(event.target.value)} />
        </div>
      </div>
      <TableTransactions transactions={transactionsShow} />
      <CustomPagination onChange={(value) => setPageActive(value)} num={transactions.length % transactionsPerPage === 0 ? transactions.length / transactionsPerPage : Math.floor(transactions.length / transactionsPerPage) + 1} />
    </Fragment>
  )
}
export default Transactions