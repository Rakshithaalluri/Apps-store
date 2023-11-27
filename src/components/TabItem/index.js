// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabId = () => {
    clickTabItem(tabId)
  }

  const activeTabItem = isActive ? 'active-tab-item' : ''

  return (
    <li className="list-item-container">
      <button
        type="button"
        className={`tab-text ${activeTabItem}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
