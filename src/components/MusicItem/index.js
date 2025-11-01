import {Component} from 'react'
import './index.css'
import {MdDelete} from 'react-icons/md'

class MusicItem extends Component {
  render() {
    const {details, DeleteButton} = this.props
    const {id, imageUrl, name, genre, duration} = details
    const deleteButton = () => {
      DeleteButton(id)
    }
    return (
      <li className="listItem">
        <div className="music-info-container">
          <img src={imageUrl} alt="track" className="image" />
          <div className="music-text-container">
            <p className="music-name">{name}</p>
            <p className="music-genre">{genre}</p>
          </div>
        </div>
        <div className="music-action-container">
          <p className="music-duration">{duration}</p>
          <button
            className="delete-button"
            type="button"
            data-testid="delete"
            onClick={deleteButton}
          >
            <MdDelete className="delete-icon" />
          </button>
        </div>
      </li>
    )
  }
}

export default MusicItem
