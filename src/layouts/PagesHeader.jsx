import dayjs from "dayjs"

const PagesHeader = ({ title }) => {
  return (
    <div className="pages-header w-full h-[100px] flex justify-between my-10 bg-widget rounded-lg items-center px-10 shadow font-bold">
      <div className="path-page text-4xl  ">
        {title}
      </div>
      <div className="flex gap-5 items-center">
        <button className="refresh-data flex items-center gap-2.5">
          Data Refresh
          <i className="icon-loop2 "></i>
        </button>
        <div className="time py-3 px-7 bg-body border-border rounded-lg border-[1px] ">
          {dayjs(Date.now()).format('MMM DD,YYYY H:m A')}
        </div>
      </div>
    </div>
  )
}

export default PagesHeader