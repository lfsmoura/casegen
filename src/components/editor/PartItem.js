import React from 'react';
import { TextItem } from './TextItem';

import { types } from '../../models/CaseItem';

export const PartItem = (props) => {
  const onTypeChange = (evt) => props.handleTypeChange(props.id, evt.target.value);
  return (<div className="part-item">
  <select className="part-type-select" value={props.type} onChange={onTypeChange}>
    {types.map(type => <option value={type}>{type}</option>)}
  </select>
  {(props.type === 'text')
    ? (<TextItem {...props} />)
    : (<span>
      {props.type}
      </span>)
    }
    </div>);
};
