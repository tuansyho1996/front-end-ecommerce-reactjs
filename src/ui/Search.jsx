
export const Search = ({ placeholder = 'Search...', query, setQuery, wrapperClass }) => {
  return (
    <div className={`relative ${wrapperClass}`}>
      <input type="search" className="pl-3 input-field pr-[60px]" placeholder={placeholder} />
      <button className="icon btn-field right-[50px]">
        <i className="icon-cancel-circle text-2xl r-5" />
      </button>
      <button className="icon btn-field right-[12px]">
        <i className="icon-search text-2xl" />
      </button>
    </div>
  )

}