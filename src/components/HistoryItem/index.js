import './index.css'

const HistoryItem = props => {
  const {historyData, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyData

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list">
      <div className="left">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="web-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        className="delete"
        onClick={onDeleteHistory}
        type="button"
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
