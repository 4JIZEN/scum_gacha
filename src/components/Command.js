import "./Command.css";
import { useState, useEffect } from "react";
function Command({ items, steamId }) {
    const [showCopy, setShowCopy] = useState(false);
    const [showLocal, setShowLocal] = useState(false);

    function onClickCopy(e) {
        if (!e.target.classList.contains("slide")) {
            e.target.classList.add("green");
        }
        navigator.clipboard.writeText(e.target.parentNode.firstChild.innerText);
    }

    function toggleCopyBtn() {
        setShowCopy(!showCopy);
    }

    function toggleLocation() {
        setShowLocal(!showLocal);
    }

    function createCommandElement() {
        let e = [];
        items.forEach((element, mkey) => {
            let newCmd = [];
            const cmdsplit = element.command.split(/\r?\n/);
            const multiCmd = cmdsplit.length > 1;

            newCmd = cmdsplit.map((item, key) => {
                const location = steamId != "" ? ` Location ${steamId}` : "";
                return (
                    <div
                        key={mkey.toString() + key.toString()}
                        className="Command-Lists"
                    >
                        {multiCmd ? (
                            <div className="command-text">
                                {item} {showLocal ? location : ""}
                            </div>
                        ) : (
                            <div className="command-text">
                                {item +
                                    " " +
                                    element.amount +
                                    (showLocal ? location : "")}
                            </div>
                        )}
                        {showCopy ? (
                            <span
                                className="copy-id span-btn"
                                onClick={(e) => {
                                    onClickCopy(e);
                                }}
                            >
                                copy
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                );
            });

            e = [...e, newCmd];
        });
        return e;
    }

    let elCommand = createCommandElement();

    function onCloseCmd() {
        document.querySelector(".Command-Container").classList.add("hide");
    }

    useEffect(() => {
        elCommand = createCommandElement();
    }, [showLocal]);

    return (
        <div className="Command-Container hide">
            <div className="Command-Body">
                <div className="Command-Header">
                    <span className="span-title">Command</span>
                    <span className="span-btn" onClick={() => toggleCopyBtn()}>
                        Toggle Copy Button
                    </span>
                    <span className="span-btn" onClick={() => toggleLocation()}>
                        Toggle Location
                    </span>
                    <span className="span-btn red" onClick={() => onCloseCmd()}>
                        Close
                    </span>
                </div>

                <div className="Command-Content">{elCommand}</div>
            </div>
        </div>
    );
}

export default Command;
