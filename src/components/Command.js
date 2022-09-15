import './Command.css'

function Command(props) {

    function onClickCopy(e) {
        if (!e.target.classList.contains('slide')) {
            e.target.classList.add('green');
        }
        navigator.clipboard.writeText(e.target.parentNode.firstChild.innerText);
    }

    let elCommand = [];
    
    props.items.forEach((element, mkey) => {
        let newCmd = [];
        newCmd =  element.command.map((item, key) =>{
                return (
                <div key={mkey.toString() + key.toString()} className='Command-Lists'>
                    <div className='command-text'>{item + ' ' + element.amount}</div>
                    <span className='span-btn' onClick={(e)=> { onClickCopy(e) }}>copy</span>
                </div>
            )
        })

        elCommand = [...elCommand, newCmd]
    });

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