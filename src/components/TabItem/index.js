import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabId = () => {
    updateActiveTabId(tabId)
  }

  const isActiveClassName = isActive ? 'active-tab-btn' : 'tab-btn'

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${isActiveClassName}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
