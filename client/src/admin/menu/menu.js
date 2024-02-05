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
        <ul className="bg-emerald-900 bottom-0 fixed flex justify-center  w-full">
            <div className="flex flex-wrap gap-x-5 px-3 py-2">
                {menuItems.map((menuItem, index) => (
                    <li key={index}>
                        <button className={`${menuToDisplay === menuItem.name && "bg-emerald-700"} hover:bg-emerald-700 px-3 py-2 rounded-lg text-white`} onClick={() => setMenuToDisplay(menuItem.name)}>{menuItem.name}</button>
                    </li>
                ))}
            </div>
        </ul>
    )
}