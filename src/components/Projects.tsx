import { useState, useEffect } from 'react';
import { Folder, GitHub, ExternalLink } from 'react-feather';
const Projects =()=>{

    const projectData = [
        {
            title: 'My Portfolio',
            desc: 'Crafted my current portfolio using react.',
            tools: '#react #javascript #typescript #html #css',
            github: 'https://github.com/nikhilhooda35/nh-portfolio',
            link: '/',
        },

    ];
    const [filtered, setFilter] = useState(projectData);
    const [currentFilter, setCurrentFilter] = useState<string>("");

    useEffect(() => {
        if (currentFilter !==""){
            let res: any = projectData.filter(f=> f.tools.includes(currentFilter ) )
            setFilter(res);
        } else {
            setFilter(projectData);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFilter])
    

    // const handleFilter = (tool: string) =>{
    //     if (tool !==""){
    //         let res = projectData.filter(f=> f.tools.split(" ").includes(tool))
    //         setFilter(res);
    //         setCurrentFilter(currentFilter+ " " + tool);
    //     }
    // }
    const handleCloseFilter = (tool: string) =>{
        let filters = currentFilter
        let newFS = filters.split(" ").filter((fs: string)=> fs!==tool)
        setCurrentFilter(newFS.join(" "))
    }

    return(
        <div id="my-projects" className="hero animated fadeInLeft" style={{animationDelay: '.4s'}}>
            <p className="sub">Featured Projects</p>
            { currentFilter !== "" &&  currentFilter.split(" ").map((cf: string, i: number)=>(
                cf !== "" && <span key={i} className="card-tool-bread" onClick={()=>handleCloseFilter(cf)}><span className='card-close'>x</span>{cf}</span>
            )) }
            <div className="wrap">
                {
                    filtered.map((i,q: number)=>(
                        <div className="card" key={q}>
                            <div className="card-header">
                                <Folder color="var(--secondary)" size={32} strokeWidth={1}/>
                                <div className="card-links">
                                    {
                                        i.github !=="" &&
                                        <a href={i.github} target="_blank" rel="noopener noreferrer">
                                            <GitHub className="link-1" color="var(--sublime)" size={18} strokeWidth={1.5}/>
                                        </a>
                                    }
                                    <a href={i.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="link-3" color="var(--sublime)" size={18} strokeWidth={1.5}/>
                                    </a>
                                </div>
                            </div>
                            <div className="card-title">{i.title}</div>
                            <div className="card-body" style={{whiteSpace: 'pre-line'}}>{i.desc}</div>
                            <div className="card-footer">
                                {
                                    i.tools.split(" ").map((t: string, i: number)=>(
                                        <span key={i} className="card-tool">{t}</span>
                                        // <span key={i} className="card-tool" onClick={()=>handleFilter(t)}>{t}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects