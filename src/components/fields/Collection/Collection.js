import React, { Component } from 'react'
import withFieldArray from '../../../wrappers/withFieldArray'
import { Card, CardActions, CardContent, CardHeader } from '@mui/material'
import PropTypes from 'prop-types'

class Collection extends Component {
  static propTypes = {
    fieldsRender: PropTypes.func.isRequired,
    buttonsRender: PropTypes.func.isRequired,
    cardProps: PropTypes.object,
    cardHeaderProps: PropTypes.object,
    cardContentProps: PropTypes.object,
    cardActionsProps: PropTypes.object
  }

  static defaultProps = {
    cardProps: {},
    cardHeaderProps: {},
    cardContentProps: {},
    cardActionsProps: {}
  }

  render() {
    const {
      fieldsRender,
      buttonsRender,
      cardProps,
      cardHeaderProps,
      cardContentProps,
      cardActionsProps,
      fieldArray
    } = this.props

    return (
      <Card {...cardProps}>
        <CardHeader {...cardHeaderProps} />

        <CardContent {...cardContentProps}>
          {fieldsRender(fieldArray)}
        </CardContent>

        <CardActions {...cardActionsProps}>
          {buttonsRender(fieldArray)}
        </CardActions>
      </Card>
    )
  }
}

export default withFieldArray(Collection)
