import React, { useEffect, useState } from 'react'
import './ServiceCard.css'
import { deleteMedia, postMedia } from '../../../Services/mediaServices'
import {
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
const ServiceCard = ({ service }) => {
  const [keys, setKeys] = useState()
  const [header, setHeader] = useState([])
  const data = {}
  const [values, setValues] = useState({})
  useEffect(() => {
    getService()
  }, [])

  const getService = async () => {
    const result = await service
    if (result) {
      setHeader(
        Object.keys(service[0]).filter((el) => {
          return el !== 'createdAt' && el !== 'updatedAt' && el !== 'id'
        })
      )
      setKeys(
        Object.keys(service[0]).filter((el) => {
          return (
            el !== 'createdAt' &&
            el !== 'updatedAt' &&
            el.includes('image') === false &&
            el.includes('description') === false
          )
        })
      )
    }
  }

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleDelete = async (id) => {
    await deleteMedia(id)
    location.reload()
  }

  const handleCreate = async () => {
    data['image'] = 'https://media.istockphoto.com/id/1192652880/fr/photo/quel-est-votre-titre-story-world-sur-lardoise-du-film.jpg?s=1024x1024&w=is&k=20&c=Hbs8hvHqBE1MUh_OZqbtVtnV2LIbK7aidHwHHQ7WM-o='
    data['description'] = `${data.title} has not description.`
    console.log(data)
    const result = await postMedia(data)
    if (result) {
      console.log('Media created.', result)
    } else {
      console.error('Something went wrong creating media.')
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'categories') {
      data['category'] = e.target.value
    } else if (e.target.name === 'platforms') {
      data['platform'] = e.target.value
    }
    data[e.target.name.toLowerCase()] = e.target.value
  }

  const showForm = () => {
    if (keys) {
      const columns = keys.map((column, idx) => {
        return { id: column, label: column.toUpperCase(), align: 'right' }
      })

      columns.push({ id: 'add', label: 'CREATE' })
      {
        return columns.map((column, idx) => {
          const value = column.id
          return idx === columns.length - 1 ? (
            <TableCell
              sx={{
                bgcolor: 'info.main',
              }}
              key={idx}
            >
              <Button onClick={(e) => handleCreate(e)}>
                <AddIcon
                  sx={{
                    color: 'success.main',
                  }}
                />
              </Button>
            </TableCell>
          ) : (
            <TableCell
              sx={{
                bgcolor: 'info.main',
              }}
              key={column.id}
              align={column.align}
            >
              <TextField
                onChange={(e) => {
                  handleChange(e)
                }}
                disabled={idx === 0 ? true : false}
                sx={{
                  border: '1px solid #ee9e09',
                  minHeight: '55px',
                }}
                name={value}
                placeholder={column.label}
                InputLabelProps={{
                  shrink: true,
                }}
              ></TextField>
            </TableCell>
          )
        })
      }
    }
  }

  const showTable = () => {
    if (keys) {
      const columns = keys.map((column, idx) => {
        return { id: column, label: column.toUpperCase(), align: 'right' }
      })
      columns.push({ id: 'delete', label: 'DELETE' })
      return (
        <Paper
          className="tableStyle"
          sx={{ width: '100vw', overflow: 'hidden' }}
        >
          <TableContainer sx={{ maxHeight: '80vh' }}>
            <Table
              sx={{
                fontSize: '20px',
              }}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column, idx) => (
                    <TableCell
                      key={idx}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>{showForm()}</TableRow>
              </TableHead>
              <TableBody>
                {service
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={`row-${idx}`}
                      >
                        {columns.map((column, idx) => {
                          const value = row[column.id]
                          return idx === columns.length - 1 ? (
                            <TableCell key={idx}>
                              <Button onClick={() => handleDelete(row.id)}>
                                <DeleteForeverOutlinedIcon
                                  sx={{
                                    color: 'secondary.main',
                                  }}
                                />
                              </Button>
                            </TableCell>
                          ) : (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={service.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )
    }
  }

  return <>{showTable()}</>
}

export default ServiceCard
