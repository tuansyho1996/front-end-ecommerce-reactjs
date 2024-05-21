import Headroom from "react-headroom"

export const AppBar = () => {
  return (
    <Headroom>
      <div className="flex items-center justify-between">
        <button className="icon text-2xl leading-none">
          <i className="icon-bars" />
        </button>
      </div>
    </Headroom>

  )
}
