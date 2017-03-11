import React from 'react';
import { TextItem } from './TextItem';

import { types } from '../../models/CaseItem';

export const PartItem = (props) => {
  const onTypeChange = (evt) => props.handleTypeChange(props.id, evt.target.value);
  const onDelete = (evt) => props.handleDelete(props.id);
  return (<div className="part-item">
  <select className="part-type-select" value={props.type} onChange={onTypeChange}>
    {types.map(type => <option value={type} key={type}>{type}</option>)}
  </select>
  {(props.type === 'text')
    ? (<TextItem {...props} />)
    : (<span>
      {props.type}
      </span>)
    }
    <button className="part-add-button" onClick={onDelete}>
      Del
    </button>
    </div>);
};
