const Directors = ({names}) => {
    return(
        <div className="not-prose w-full grid grid-cols-3 gap-5">
            {
                names.map((name,index)=>(
                    <a href={`/team/${name.toLowerCase().replace(/\s/g, '-')}`} target="__blank" id={index}>
                        <div className="group flex flex-col">
                            <div className="mb-0 w-52 h-52 overflow-hidden border-4 border-transparent group-hover:border-rose-500 duration-300 group-hover:shadow-md">
                                <img src={`/team/${name}.jpg`} alt={name} className="mb-0 w-52 h-52 object-cover group-hover:scale-125 duration-300"/>
                            </div>
                            <span className="font-semibold group-hover:underline">Rtr. {name}</span>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default Directors;