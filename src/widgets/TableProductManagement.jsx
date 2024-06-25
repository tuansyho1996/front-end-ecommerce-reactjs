import { DataGrid, GridSeparatorIcon } from '@mui/x-data-grid';


const columns = [
  {
    flex: 1, field: 'image', renderHeader: () => (<i className='text-2xl icon-image' />),
    renderCell: (img) => {
      return (
        <div className="flex h-full items-center">
          <img className='w-auto h-3/4 object-contain' src={img.value} />
        </div>
      )
    }
  },
  { flex: 1, field: 'name', headerName: 'PRODUCT NAME' },
  { flex: 1, field: 'sku', headerName: 'SKU' },
  { flex: 1, field: 'stock', headerName: 'STOCK' },
  { flex: 1, field: 'price', headerName: 'PRICE' },
  { flex: 1, field: 'category', headerName: 'CATEGORY' },
  { flex: 1, field: 'status', headerName: 'STATUS' },
  { flex: 1, field: 'type', headerName: 'TYPE' },
  { flex: 1, field: 'statistics', headerName: 'STATISTICS' },
  { flex: 1, field: 'tags', headerName: 'TAGS' },
  { flex: 1, field: 'rateCount', headerName: 'RATE' },
  { flex: 1, field: 'date', headerName: 'DATE' },
];

const TableProductManagement = ({ products }) => {
  return (
    <div >
      <DataGrid
        getRowId={(row) => row.sku}
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 10]}
        checkboxSelection
        columnSeparator={false}
        disableColumnResize={true}
        disableColumnSorting={true}
        disableColumnMenu={true}
        sx={{
          color: 'var(--text)',
          '.MuiTablePagination-toolbar': {
            color: 'var(--text)!important'
          },
          '.MuiDataGrid-row': {
            '--rowBorderColor': 'none!important'
          },
          border: 'none',
          '.MuiDataGrid-filler': {
            display: 'none'
          },
          '.MuiDataGrid-virtualScrollerContent': {
            paddingTop: '15px'
          },
          ".MuiDataGrid-cell:focus": {
            outline: "none !important",
          },
          backgroundColor: 'var(--widget)',
          borderRadius: '5px',
          '.MuiDataGrid-columnHeader:focus': {
            outline: 'none'
          }
        }}
        classes={{
          columnHeader: '!bg-widget',
          checkboxInput: '!text-[--text]',
        }}
      />
    </div>
  )
}

export default TableProductManagement