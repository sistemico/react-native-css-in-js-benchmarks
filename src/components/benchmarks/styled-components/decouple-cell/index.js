import React from 'react'
import styled from 'styled-components/native'

import { getCellColor, toPercent } from '../../../../utils/helpers'
import { TablePropTypes } from '../../../../utils/types'

const Table = styled.ScrollView``

const Row = styled.View`
  flex-direction: row;
`

const CellDefault = styled.View`
  flex: 1;
  padding: 10px;
`

const Cell = styled(CellDefault)`
  background: ${props => getCellColor(props.opacity)};
`

const Text = styled.Text`
  text-align: center;
  color: white;
`

const TableComponent = ({ table, ...props }) => (
  <Table removeClippedSubviews={false} {...props}>
    {table.map((row, rowIndex) => (
      <Row key={rowIndex}>
        {row.map((value, columnIndex) => (
          <Cell key={`${rowIndex}${columnIndex}`} opacity={parseFloat(value)}>
            <Text numberOfLines={1}>{toPercent(value)}</Text>
          </Cell>
        ))}
      </Row>
    ))}
  </Table>
)

TableComponent.title = 'Styled Components (Decouple Cell)'

TableComponent.propTypes = {
  table: TablePropTypes.isRequired,
}

export default TableComponent
