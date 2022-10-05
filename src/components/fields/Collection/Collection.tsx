import React, { Component, ReactNode } from 'react';
import withFieldArray from '../../../wrappers/withFieldArray';
import PropTypes from 'prop-types';
import { UseFieldArrayReturn } from 'react-hook-form/dist/types';

export interface CollectionProps {
  fieldsRender: (fieldArray: UseFieldArrayReturn) => ReactNode;
  buttonsRender: (fieldArray: UseFieldArrayReturn) => ReactNode;
}

class Collection extends Component<
  CollectionProps & { fieldArray: UseFieldArrayReturn },
  any
> {
  render() {
    const { fieldsRender, buttonsRender, fieldArray } = this.props;

    return (
      <React.Fragment>
        {fieldsRender(fieldArray)}
        {buttonsRender(fieldArray)}
      </React.Fragment>
    );
  }
}

const CollectionComponent = withFieldArray(Collection);

CollectionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  fieldsRender: PropTypes.func.isRequired,
  buttonsRender: PropTypes.func.isRequired,
};

export default CollectionComponent;
