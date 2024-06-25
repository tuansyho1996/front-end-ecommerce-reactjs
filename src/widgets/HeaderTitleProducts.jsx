import ItemIcon from "./ItemIcon"

const HeaderTitleProducts = ({ title, bgIcon, icon }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <ItemIcon icon={icon} bg={bgIcon} px='px-3' py='py-3' />
      <div className="text-2xl font-bold">
        {title}
      </div>
    </div>
  )
}

export default HeaderTitleProducts