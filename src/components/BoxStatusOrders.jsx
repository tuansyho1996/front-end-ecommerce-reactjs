import ItemIcon from "@widgets/ItemIcon"

const BoxStatusOrder = ({ data }) => {
  return (
    <div className="flex p-5 justify-between bg-widget rounded-lg">
      <div className="flex flex-col justify-between">
        <ItemIcon icon={data.icon} bg={data.bg} />
        <div className="font-bold">
          <p>{data.label}</p>
          <p className="text-2xl">{data.number}</p>
        </div>
      </div>
      <i className="icon-dots-three-vertical" />
    </div>
  )
}
export default BoxStatusOrder