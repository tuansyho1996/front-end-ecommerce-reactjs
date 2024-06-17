import { Rating } from "@mui/material";
import Counter from "@widgets/Counter";
import Trend from "@widgets/Trend";
import { formatNumber } from "@utils/helpers";

export const COLUMN_SELLER_TABLE = [
  {
    title: 'SELLER',
    width: '25%',
    render: (_, record) =>
      <div key='1' className="flex gap-5 ">
        <img className="w-1/4 rounded-lg" src={record.logo} alt="" />
        <div className="flex flex-col gap-3">
          <p>{record.website}</p>
          <p>{record.phone}</p>
          <p>{record.email}</p>
          <p>{record.name}</p>
        </div>
      </div>,

  },
  {
    title: 'ORDER VALUE',
    dataIndex: 'sales',
    width: '10%',
    key: '2',
    render: (sales) =>
      <div key='2' className="flex flex-col gap-3 font-bold">
        <div className="text-3xl">{<Counter number={sales} />}</div>
        <p>New Orders</p>
        <Trend trend='up' rate={68} />
      </div>

  },
  {
    title: 'INCOME VALUE',
    width: '10%',
    key: '3',
    render: () =>
      <div key='3' className="flex flex-col gap-3 font-bold">
        <div className="text-3xl">$23k</div>
        <p>Income</p>
        <Trend trend='up' rate={14} />
      </div>
  },
  {
    title: 'REVIEW RATING',
    dataIndex: 'rating',
    width: '10%',
    key: '4',
    render: rating =>
      <Rating key='4' value={rating} />
  },
  {
    title: 'SALES CATEGORIES VALUE',
    dataIndex: 'profit',
    width: '15%',
    key: '5',
    render: (profit) =>
      <div key='5' className="flex flex-col gap-3 ">
        {
          Object.keys(profit).map((key) => {
            return (
              <div key={`5-${key}`} className="flex gap-3 justify-between capitalize text-[16px] font-bold w-3/4">
                <div>{key}</div>
                <div> {formatNumber(profit[key], '$')}</div>
              </div>
            )
          })
        }
      </div>
  },
  {
    title: 'ACTION',
    key: '6',
    width: '5%',
    render: () =>
      <div key='6' className="flex gap-3">
        <i className="icon-pencil" />
        <i className="icon-dots-three-vertical" />
      </div>
  }
]