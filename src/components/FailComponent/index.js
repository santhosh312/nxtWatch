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
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
    altText: 'failure view',
    headText: 'Oops! Something Went Wrong',
    descriptionText:
      'We are having some trouble to complete your request. Please try again.',
  },
  failDark: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
    altText: 'failure view',
    headText: 'Oops! Something Went Wrong',
    descriptionText:
      'We are having some trouble to complete your request. Please try again.',
  },
  notFoundDark: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png',
    altText: 'not found',
    headText: 'Page Not Found',
    descriptionText: 'We are sorry, the page you requested could not be found.',
  },
  notFoundLight: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png',
    altText: 'not found',
    headText: 'Page Not Found',
    descriptionText: 'We are sorry, the page you requested could not be found.',
  },
  noSavedVideos: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png',
    altText: 'no saved videos',
    headText: 'No saved videos found',
    descriptionText: 'You can save your videos while watching them',
  },
}

function FailComponent(props) {
  const {failType, failRetry} = props
  const failDetails = failImages[failType]
  const {imageUrl, headText, altText, descriptionText} = failDetails

  return (
    <nxtWatchContext.Consumer>
      {value => {
        const {isdark} = value

        return (
          <div className="fail-container">
            <img className="fail-image" src={imageUrl} alt={altText} />
            <FailHeading isdark={isdark}>{headText}</FailHeading>
            <FailDescription isdark={isdark}>{descriptionText}</FailDescription>
            {altText === 'no videos' && (
              <FailButton onClick={failRetry}>Retry</FailButton>
            )}
            {altText === 'failure view' && (
              <FailButton onClick={failRetry}>Retry</FailButton>
            )}
          </div>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}

export default FailComponent
