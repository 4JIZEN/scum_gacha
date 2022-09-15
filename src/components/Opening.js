import './Opening.css';
import video from '../assets/lockpick.mp4';

function Opening() {

    return (
        <div className='Opening-Container'>
            {/* <video class="Video-container" muted autoPlay> */}
            <video className="Video-container">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Opening;