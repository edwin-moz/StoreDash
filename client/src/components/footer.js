export const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t-2 flex">
            <div className="flex gap-5 p-10">
                <div>
                    <div>
                        <p className="text-2xl text-gray-900 italic">StoreDash</p>
                    </div>
                    <div>
                        <p>505 Deaderick Street</p>
                        <p>Nashville, TN 37243</p>
                    </div>
                </div>
                <div className="self-center">
                    <div>
                        <p className="text-sm">&copy; 2024 StoreDash. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}