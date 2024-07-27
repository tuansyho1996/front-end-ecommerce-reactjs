import PagesHeader from "@layouts/PagesHeader"
import { Pagination, Rating } from "@mui/material"
import ItemIcon from "@widgets/ItemIcon"
import { Fragment, useEffect, useState } from "react"
import reviews from "@db/reviews"
import LinearProgressPercent from "@widgets/LinearProgressPercent"
import TableReviews from "@widgets/TableReviews"
import CustomPagination from "@components/CustomPagination"
import { sortReviews } from "@utils/helpers"

const ratings = [1, 2, 3, 4, 5]
const numReviewPerPage = 5
const sorts = ['Recent', 'Oldest', 'Highest rating', 'Lowest rating']


const Reviews = () => {
  const startRating = (start) => {
    return reviews.filter(review => Math.floor(review.rating) === start).length
  }

  const [pageActive, setPageActive] = useState(1)
  const [reviewsShow, setReviewsShow] = useState(null)
  const [sort, setSort] = useState('Recent')

  useEffect(() => {
    const copyReviews = [...reviews]
    setReviewsShow(sortReviews(copyReviews, sort).slice(numReviewPerPage * pageActive - numReviewPerPage, numReviewPerPage * pageActive))
  }, [pageActive, sort])

  return (
    <Fragment>
      <PagesHeader title='Reviews' />
      <div className="grid grid-cols-6 gap-5 font-bold">
        <div className="flex flex-col justify-center items-center gap-3 bg-widget card py-10 rounded-lg">
          <Rating sx={{
            '.MuiRating-icon': {
              color: 'var(--yellow)'
            }
          }}
            value={4.5}
            precision={0.5} />
          <div className="text-xl">4.5</div>
          <div>Review score</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 bg-widget card py-10 rounded-lg">
          <ItemIcon icon='users' bg='bg-green' />
          <div className="text-xl">348</div>
          <div>Total</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 bg-widget card py-10 rounded-lg">
          <ItemIcon icon='user-plus' bg='bg-sky-500' />
          <div className="text-xl">25%</div>
          <div>New user</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 bg-widget card py-10 rounded-lg">
          <ItemIcon icon='users1' bg='bg-red' />
          <div className="text-xl">75%</div>
          <div>Regular user</div>
        </div>
        <div className="col-span-2 flex flex-col gap-3  bg-widget card p-10 rounded-lg">
          {
            ratings.sort((a, b) => b - a).map(rating => {
              return (
                <div key={rating} className="flex gap-3 items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <div>{rating}</div>
                    <i className="icon-star text-yellow mb-0.5" />
                  </div>
                  <LinearProgressPercent label='bg-yellow' size="10px" value={startRating(rating) / reviews.length * 100} />
                  <div className="w-20 text-right">{startRating(rating) / reviews.length * 100}%</div>
                </div>
              )
            })
          }

        </div>
      </div>
      <TableReviews reviews={reviewsShow} sorts={sorts} setSort={(value) => setSort(value)} />
      <CustomPagination num={reviews.length % numReviewPerPage === 0 ? reviews.length / numReviewPerPage : Math.floor(reviews.length / numReviewPerPage) + 1} onChange={(value) => setPageActive(value)} />
    </Fragment>
  )
}
export default Reviews