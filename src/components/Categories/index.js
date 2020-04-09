import { changeCategory, getAllCategories } from '../../actions'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}
const mapDispatchToProps = { changeCategory, getAllCategories }


const Categories = ({ changeCategory, categories, getAllCategories }) => {
  const categoryFetcher = function() {
    getAllCategories()
  }
  useEffect(() => categoryFetcher(), []); //eslint-disable-line
  return (
    <>
    <h3>Filter by: </h3>
    <select className="Categories"  onChange={e => changeCategory(e.target.value)}>
      {categories.map(category => {
        return (
          <option key={category.name} value={category}>{category.name}</option>
        )
      })}
    </select>
    </>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(Categories)

