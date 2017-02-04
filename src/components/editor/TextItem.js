import React from 'react';

export const TextItem = (props) => {
  const onChange = (evt) => props.handleValueChange(props.id, evt.target.value);
  return (<input type="text"
    onChange={onChange}
    value={props.value}/>
)};

TextItem.propTypes = {
  value: React.PropTypes.string
}
