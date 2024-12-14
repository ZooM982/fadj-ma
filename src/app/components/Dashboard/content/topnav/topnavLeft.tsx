"use client"
import Greeting from "./greeting"

const TopnavLeft = () =>{
    return (
        <section className="w-full mx-auto">
            <div className="md:flex justify-between bg-white h-auto md:h-16 md:px-10 py-2">
            <div className="search">
                <input type="text" placeholder="Rechercher n'importe quoi ici" className="border w-72 mx-5 my-1 p-1"/>
            </div>
            <div className="traduction">
                
            </div>
            <div className="greeting ">
                <Greeting />
            </div>
        </div>
        </section>
    )
}

export default TopnavLeft
