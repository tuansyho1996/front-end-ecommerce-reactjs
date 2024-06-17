const ItemIcon = ({ icon, bg, size = 'text-2xl', width = 'w-14', height = 'h-14', itemsPosition = 'items-center', justifyPosition = 'justify-center' }) => {
  return (
    <div className={`rounded-md ${bg} flex ${itemsPosition} ${justifyPosition} ${width} ${height}`}>
      <i className={`icon-${icon} ${size} text-widget`} />
    </div>

  )
}
export default ItemIcon