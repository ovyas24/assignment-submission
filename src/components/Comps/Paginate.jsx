import { useEffect, useState } from "react"

const Paginate = ({ active, lastpage, handleChange }) => {

    const [ tabs, setTabs ] = useState([])

    useEffect(()=>{
        console.log("active ", active , " lastpage ", lastpage);
        if(active == 1){
            if(lastpage == active){
                setTabs([1, null, null])
            }
            else if(lastpage==2){
                setTabs([active,null, lastpage])
            }
            else{
                setTabs([1, active+1, lastpage])
            }
        }
        else if(active==lastpage){
            if(lastpage == 2){
                setTabs([active-1, null, lastpage])
            }
            else{
                setTabs([active-2, active -1, active])
            }
        }else{
            setTabs([active-1, active, active+1])
        }
    },[active])

    return (
        <ul className="pagination">
            <li className={"page-item " + (active == 1 ? "disabled" : "")}><a onClick={() => handleChange(active - 1) } className="page-link" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
            { tabs[0] ? <li className={"page-item "+ (active==1 ? "active" : "")}><a onClick={() => handleChange(tabs[0]) } className="page-link" >{tabs[0]}</a></li> : null}
            { tabs[1] ? <li className={"page-item " + (active !==1 && active !== lastpage ? "active" : "")} ><a onClick={() => handleChange(tabs[1]) } className="page-link" >{tabs[1]}</a></li> : null}
            { tabs[2] ? <li className={"page-item " + (active == lastpage ? "active" : "")}><a onClick={() => handleChange(tabs[2]) } className="page-link" >{tabs[2]}</a></li> : null}
            <li className={"page-item " + (active == lastpage ? "disabled" : "")} > <a onClick={() => handleChange(active +  1) } className="page-link" aria-label="Next"><span aria-hidden="true">»</span></a></li>
        </ul>
    )
}

export default Paginate