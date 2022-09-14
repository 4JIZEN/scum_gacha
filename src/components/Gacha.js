import './Gacha.css';
import { useEffect, useState } from 'react';
import Command from './Command'
// import Opening from './Opening'
import items from '../utils/items'
import getRandItems from '../utils/rand'

function Gacha() {

    const elGachaItems = items.map((item, key) => {
        return (
            <div key={key} className={'Gacha-Item ' + item.rate} style={{backgroundImage: `url(${item.img})`}}>
                <div className="Gacha-Item-Amount">x<span>{item.amount}</span></div>
            </div>
        )
    })

    // const [steamId, setSteamId] = useState('');
    const [count, setCount] = useState(0);

    const [inventory, setInventory] = useState([]);
    const [elReceived, setElReceived] = useState([]);

    function onReset() {
        if (!window.confirm('Confirm to reset data?')) return
        setCount(0)
        setInventory([])
        setElReceived([])
    }

    function onOpenCmd() {
        document.querySelector('.Command-Container').classList.remove('hide');
    }

    function onOpenAll(type) {
        // if (!window.confirm('Confirm Open Gacha?')) return
        if (count === 0) {
            alert('No Gacha Count!')
            return
        }
        
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
    }

    useEffect(()=> {
        setElReceived(inventory.map((item, key) => {
            return (
                <div key={key} className={'Gacha-Item ' + item.rate} style={{backgroundImage: `url(${item.img})`}}>
                    <div className="Gacha-Item-Amount">x<span>{item.amount}</span></div>
                </div>
            )
        }))

        if (inventory.length === 0) {
            document.querySelector('.Gacha-Received').classList.add('hide');
            document.querySelector('.span-btn').classList.add('hide');
        } else {
            document.querySelector('.Gacha-Received').classList.remove('hide');
            document.querySelector('.span-btn').classList.remove('hide');
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
            {/* <Opening /> */}
        </div>
    );
}

export default Gacha;