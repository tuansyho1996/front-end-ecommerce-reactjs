const ItemIcon = ({ icon, bg, size = 'text-2xl', px = 'px-2', py = 'py-2', itemsPosition = 'items-center', justifyPosition = 'justify-center' }) => {
  return (
    <div className={`w-auto`}>
      <i className={`icon-${icon} ${size} ${px} ${py} text-widget ${bg} rounded-lg`} />
    </div>

  )
}
export default ItemIcon