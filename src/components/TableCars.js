import React, { useMemo } from 'react'
import { useFilters, useTable } from 'react-table'
import MOCK_DATA from '../constants/MOCK_DATA'
import { COLUMNS } from '../constants/Columns'
import styles from './TableCars.module.css'

function TableCars() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = tableInstance
  const handleFilterChange = (columnId, value) => {
    setFilter(columnId, value || undefined)
  }
  return (
    <div className={styles.container}>
      <input
        onChange={(e) => handleFilterChange('Model', e.target.value)}
        placeholder="Модель"
      />
      <input
        onChange={(e) => handleFilterChange('CarNumber', e.target.value)}
        placeholder="Госномер"
      />
      <input
        onChange={(e) => handleFilterChange('VIN', e.target.value)}
        placeholder="VIN"
      />
      <input
        onChange={(e) => handleFilterChange('IMEI', e.target.value)}
        placeholder="IMEI"
      />
      <input
        onChange={(e) => handleFilterChange('Owner', e.target.value)}
        placeholder="Владелец"
      />
      <div className={styles.tableWrapper}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td key={cell.id} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default TableCars
