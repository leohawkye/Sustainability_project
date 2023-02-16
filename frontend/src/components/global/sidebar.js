import SidebarItem from "./sidebaritems"
import items from "../../data/sidebardata.json"



export default function Sidebar(){
    return (

        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}