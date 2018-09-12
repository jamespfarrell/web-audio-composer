import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  /*padding: '0.5rem 1rem',*/
  cursor: 'move',
  width: '150px',
  textAlign: 'center',
};

const boxSource = {
  canDrag(props) {
    console.log('forbidDrag' + props.forbidDrag);
    return !props.forbidDrag;
  },

  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  },
};

export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    hideSourceOnDrag: PropTypes.bool.isRequired,
    children: PropTypes.node,
    //forbidDrag: PropTypes.bool.isRequired
  };

  render() {
    const { hideSourceOnDrag, left, top, isDragging, children } = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    return <div style={{ ...style, left, top }}>{children}</div>;
  }

  /* handleToggleForbidDrag() {

        this.props.handleToggleForbidDrag();

    }*/
}