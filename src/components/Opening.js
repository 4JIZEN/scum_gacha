import './Opening.css';
import video from '../assets/lockpick.mp4';

function Opening() {
    
    setTimeout(()=> {
        const elOpen = document.querySelector('.Opening-Container');
        elOpen.style.opacity = 1;
        const vid = document.querySelector('.Video-container');
        vid.volume = 0.2;
        vid.muted = false;

        setTimeout(() => {
            elOpen.classList.remove('fade-in')
            elOpen.classList.add('fade-out')
            setTimeout(() => {
                elOpen.style.opacity = 0;
            }, 200)
        }, 3200);
    }, 500)

    return (
        <div className='Opening-Container fade-in'>
            <video class="Video-container" muted autoPlay>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Opening;