import { changeCategory } from '../../actions'
import React from 'react'
import { connect } from 'react-redux'
import { allCategories } from '../reducers/categories'

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}


const Categories = ({ changeCategory, categories }) => {
  return (
    <>
    <h3>Filter by: </h3>
    <select className="Categories" value={categories} onChange={e => changeCategory(e.target.value)}>
      {Object.keys(allCategories).map(category => {
        return (
          <option key={category} value={category}>{category}</option>
        )
      })}
    </select>
    </>
  )
}



export default connect(mapStateToProps, { changeCategory })(Categories)

