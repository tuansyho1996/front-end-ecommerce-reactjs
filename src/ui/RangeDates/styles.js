import styled from "styled-components";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker

const RangeDatePicker = styled(RangePicker)`
  .ant-picker-input {
    width: 100px !important;
    input{
      font-size:16px;
      color:var(--text)!important;
    }
  }
  .ant-picker-separator{
    color:var(--text)!important
  }
  .ant-picker-suffix{
    color:var(--text)!important
  }
  .ant-picker-input>input::placeholder{
    color:var(--text)!important
  }
`

export default RangeDatePicker