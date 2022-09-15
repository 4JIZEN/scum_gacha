import './Gacha.css';
import { useEffect, useState } from 'react';
import Command from './Command'
import Opening from './Opening'
import items from '../utils/items'
import getRandItems from '../utils/rand'

function Gacha() {

    // const [steamId, setSteamId] = useState('');
    const [count, setCount] = useState(0);
    const [inventory, setInventory] = useState([]);
    const [elReceived, setElReceived] = useState([]);
    const [lockpick, setLockpick] = useState(false);

    const elGachaItems = items.map((item, key) => {
        return (
            <div key={key} className={'Gacha-Item ' + item.rate} style={{backgroundImage: `url(${item.img})`}}>
                <div className="Gacha-Item-Amount">x<span>{item.amount}</span></div>
            </div>
        )
    })

    function onReset() {
        if (!window.confirm('Confirm to reset data?')) return
        setCount(0)
        setInventory([])
        setElReceived([])
    }

    function onOpenCmd() {
        document.querySelector('.Command-Container').classList.remove('hide');
    }

    function disableBtn() {
        const el = document.querySelectorAll('.Btn-Open-Gacha');
        el.forEach(item => {
            item.disabled = true;
        })
    }

    function enableBtn() {
        const el = document.querySelectorAll('.Btn-Open-Gacha');
        el.forEach(item => {
            item.disabled = false;
        })
    }

    function onOpenAll(type) {
        // if (!window.confirm('Confirm Open Gacha?')) return
        
        if (count === 0) {
            alert('No Gacha Count!')
            return
        }

        disableBtn()
        let found = false
        let tinv = inventory
        let openCount = count

        if (type) {
            setCount(0)
        } else {
            openCount = 1
            setCount( prevCount => prevCount - 1)
        }

        for (let i = 1; i <= openCount; i++) {
            found = false
            const received = getRandItems(items)
            for (const x in tinv) {
                if (tinv[x].name === received.name) {
                    found = true
                    tinv[x].amount += received.amount
                    break
                }
            }

            if (!found) {
                tinv = [...tinv, ...[JSON.parse(JSON.stringify(received))]]
            }
        } 
       
        setInventory(tinv)
        setLockpick(true)
    }

    useEffect(()=> {
        function inventoryHide(status) {
            const elGcRec = document.querySelector('.Gacha-Received');
            const elBtn = document.querySelector('.span-btn');

            if (status) {
                elGcRec.classList.add('hide');
                elBtn.classList.add('hide');
            } else {
                elGcRec.classList.remove('hide');
                elBtn.classList.remove('hide');
            }
       }

        inventoryHide(true)
        setElReceived(inventory.map((item, key) => {
            return (
                <div key={key} className={'Gacha-Item ' + item.rate} style={{backgroundImage: `url(${item.img})`}}>
                    <div className="Gacha-Item-Amount">x<span>{item.amount}</span></div>
                </div>
            )
        }))

        if (lockpick) {
            const vid = document.querySelector('.Video-container');
            const elOpen = document.querySelector('.Opening-Container');
            vid.currentTime = 0;
            vid.volume = 0.2;
            vid.muted = false;
            vid.play();
            elOpen.style.opacity = 1;
            elOpen.style.zIndex = 99;
            setTimeout(() => {
                elOpen.classList.add('fade-out')
                setTimeout(() => {
                    elOpen.style.opacity = 0;
                    elOpen.style.zIndex = -99;
                    elOpen.classList.remove('fade-out')
                    setLockpick(false)
                    inventoryHide(false)
                    setTimeout(() => {
                        enableBtn()
                    }, 500)
                }, 500)
            }, 4000);
        }
    }, [inventory])

    useEffect(()=> {
        document.querySelector('.Gacha-Count-Input').value = count;
    }, [count])

    return (
        <div className="Gacha">
            <p className="Head-Sub" >Package</p>
            <div className="Gacha-Items-list">{elGachaItems}</div>
            
            <div className='Gacha-Control'>
                <form id="FormGachaInfo" className='Gacha-Control-Info'>
                    {/* <input type="text" onChange={ e => setSteamId(e.target.value) } placeholder="Steam ID" required/> */}
                    <input className='Gacha-Count-Input' type="number" min={0} max={1000} value={count} onChange={ e => setCount(e.target.value) } placeholder="Gacha Count" required/>
                </form>

                <button className="Btn-Open-Gacha" onClick={ () => onOpenAll(false) } >Open</button>
                <button className="Btn-Open-Gacha" onClick={ () => onOpenAll(true) } >Open All</button>
                <button className="Btn-Open-Gacha" onClick={ () => onReset() } >Reset</button>
                
            </div>

            <p className="Head-Sub">Received <span className='Btn-Command span-btn hide' onClick={()=> onOpenCmd()}>command</span></p>
            <div className='Gacha-Received hide'>{elReceived}</div>
            <Command items={inventory} />
            <Opening show={lockpick}/>
        </div>
    );
}

export default Gacha;