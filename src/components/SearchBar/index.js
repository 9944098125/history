import './index.css'

const SearchBar = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    enterSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <button
          className="search-butt"
          type="button"
          onClick={onChangeSearchInput}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            className="search-icon"
            alt="search"
          />
        </button>
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
      </div>
    )
  }

  return <div className="header">{renderSearchInput()}</div>
}

export default SearchBar
