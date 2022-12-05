import './Command.css'

function Command({items, steamId}) {

    function onClickCopy(e) {
        if (!e.target.classList.contains('slide')) {
            e.target.classList.add('green');
        }
        navigator.clipboard.writeText(e.target.parentNode.firstChild.innerText);
    }

    function toggleCopyBtn() {
        const el = document.querySelectorAll('.copy-id');
    
        el.forEach((e) => {
            if (e.style.visibility  == 'hidden') {
                e.style.visibility = "visible";
            } else {
                e.style.visibility  = "hidden";
            }
        })
    }

    let elCommand = [];

    items.forEach((element, mkey) => {
        let newCmd = [];
        const cmdsplit = element.command.split(/\r?\n/);
        const multiCmd = cmdsplit.length > 1;

        newCmd = cmdsplit.map((item, key) =>{
                const location = (steamId != "") ?  ` Location ${steamId}` : '';
                return (
                <div key={mkey.toString() + key.toString()} className='Command-Lists'>
                    {
                        (multiCmd)
                        ? <div className='command-text'>{item} {location}</div>
                        : <div className='command-text'>{item + ' ' + element.amount + location}</div>
                    }
                    <span className='copy-id span-btn' onClick={(e)=> { onClickCopy(e) }}>copy</span>
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
                    <span className='span-btn' onClick={()=> toggleCopyBtn()}>Toggle Copy Button</span>
                    <span className='span-btn red' onClick={()=> onCloseCmd()}>Close</span>
                </div>

                <div className='Command-Content'>{elCommand}</div>
            </div>
        </div>
    )
}

export default Command;