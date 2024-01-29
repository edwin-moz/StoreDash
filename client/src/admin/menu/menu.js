const menuItems = [
    {
        name: "Products"
    },
    {
        name: "Types"
    },
    {
        name: "Distributors"
    },
    {
        name: "Inventory"
    }
]
export const Menu = ({ menuToDisplay, setMenuToDisplay }) => {
    return (
        <ul className="bottom-0 fixed flex flex-wrap gap-x-5 justify-center w-full">
            {menuItems.map((menuItem, index) => (
                <li key={index}>
                    <button className={`${menuToDisplay === menuItem.name && "bg-emerald-600/20"} hover:bg-emerald-600/20 px-3 py-2 hover:text-emerald-600 rounded-lg`} onClick={() => setMenuToDisplay(menuItem.name)}>{menuItem.name}</button>
                </li>
            ))}
        </ul>
    )
}