import { DatePicker, Space } from "antd"

const { RangePicker } = DatePicker;

const onOk = (value) => {
  console.log('onOk: ', value);
};
const CalendarPicker = () => {
  return (
    <>
      <Space direction="vertical" size={12}>
        <RangePicker
          className="font-bold !text-header p-3 text-2xl"

          showTime={{
            format: 'HH:mm',
          }}
          format="YYYY-MM-DD HH:mm"
          onChange={(value, dateString) => {
            console.log('Selected Time: ', value);
            console.log('Formatted Selected Time: ', dateString);
          }}
          onOk={onOk}
        />
      </Space>
    </>
  )
}
export default CalendarPicker