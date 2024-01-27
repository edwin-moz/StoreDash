export const Footer = () => {
    return (
        <footer className="bg-gray-100 flex flex-wrap justify-around p-10">
            <div className="flex">
                <div className="self-center">
                    <div>
                        <p className="text-2xl text-gray-900 italic tracking-widest">StoreDash</p>
                    </div>
                    <div>
                        <p className="text-gray-600">505 Deaderick Street</p>
                        <p className="text-gray-600">Nashville, TN 37243</p>
                    </div>
                </div>
            </div>
            <div className="self-center">
                <div>
                    <p className="text-sm">&copy; 2024 StoreDash. All Rights Reserved.</p>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="my-3">Want to sell your products? <span className="text-blue-600">Contact me</span></p>
                <input className="border h-10 mb-3 outline-none px-3 rounded-lg" placeholder="Your email" type="email" />
                <textarea className="border h-32 mb-3 outline-none p-3 rounded-lg" placeholder="Your message" />
                <button className="active:scale-105 bg-gray-900 hover:scale-110 text-white transition px-4 py-2 rounded-full self-end">Send</button>
            </div>
        </footer>
    )
}