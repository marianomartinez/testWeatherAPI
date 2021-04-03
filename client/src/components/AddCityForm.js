import React from 'react';

const AddCityForm = ({newLocationValue, onChange, onSubmit}) => {
  return (
    <form className="py-2 col-sm-12 col-md-6 m-auto input-group mb-3" onSubmit={onSubmit}>
      <input className="form-control" placeholder="Add a city" type="text" value={newLocationValue} onChange={onChange} />
      <button className="btn btn-outline-secondary" type="submit">Add</button>
    </form>
  )
}

export default AddCityForm;