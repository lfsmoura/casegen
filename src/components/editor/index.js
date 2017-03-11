import React from 'react';
import { PartItem } from './PartItem';

export const Editor = (props) => {
  return (<div className="editor">
      <h2>Editar</h2>
      <div>
        {props.model.map(model => (
            <PartItem key={model.id}
            handleValueChange={props.handleValueChange}
            handleTypeChange={props.handleTypeChange}
            handleDelete={props.handleDelete}
            {...model} />))}
            <button className="part-add-button" onClick={props.handleAdd}>
              +
            </button>
      </div>
    </div>)
};
