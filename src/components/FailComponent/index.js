import {FailButton, FailHeading, FailDescription} from '../../styledComponents'
import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'
import './index.css'

const failImages = {
  search: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png',
    altText: 'no videos',
    headText: 'No Search results found',
    descriptionText: 'Try different key words or remove search filter',
  },
  failLight: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png',
    altText: 'fail view',
    headText: 'Oops! Something Went Wrong',
    descriptionText:
      'We are having some trouble to complete your request. Please try again.',
  },
  failDark: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png',
    altText: 'fail view',
    headText: 'Oops! Something Went Wrong',
    descriptionText:
      'We are having some trouble to complete your request. Please try again.',
  },
}

function FailComponent(props) {
  const {failType} = props
  const failDetails = failImages[failType]
  const {imageUrl, headText, altText, descriptionText} = failDetails

  return (
    <nxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <div className="fail-container">
            <img className="fail-image" src={imageUrl} alt={altText} />
            <FailHeading isDark>{headText}</FailHeading>
            <FailDescription isDark>{descriptionText}</FailDescription>
            <FailButton>Retry</FailButton>
          </div>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}

export default FailComponent
