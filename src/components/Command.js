import './Command.css'
// import { useState } from 'react';

function Command(props) {

    function onClickCopy(e) {
        if (!e.target.classList.contains('slide')) {
            e.target.classList.add('green');
        }
        navigator.clipboard.writeText(e.target.parentNode.firstChild.innerText);
    }

    const elCommand = props.items.map((item, key) =>{
        return (
            <div key={key} className='Command-Lists'>
                <div className='command-text'>{item.command + ' ' + item.amount}</div>
                <span className='span-btn' onClick={(e)=> { onClickCopy(e) }}>copy</span>
            </div>
        )
    })

    function onCloseCmd() {
        document.querySelector('.Command-Container').classList.add('hide');
    }

    return (
        <div className='Command-Container hide'>
            <div className='Command-Body'>
                <div className='Command-Header'>
                    <span className='span-title'>Command</span>
                    <span className='span-btn red' onClick={()=> onCloseCmd()}>Close</span>
                </div>

                <div className='Command-Content'>{elCommand}</div>
            </div>
        </div>
    )
}

export default Command;