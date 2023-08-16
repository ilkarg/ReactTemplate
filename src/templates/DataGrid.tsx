import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export const TemplateDataGrid = (rows: any, columns: any, handleRowClick?: any, handleRowDoubleClick?: any) => (
  <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      onRowClick={handleRowClick}
      onRowDoubleClick={handleRowDoubleClick}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
)