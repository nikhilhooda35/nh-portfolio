import { useState, useEffect } from 'react';
import { Folder, GitHub, ExternalLink } from 'react-feather';

const Projects = () => {
    const projectData = [
        {
            title: 'My Portfolio',
            desc: 'Crafted my current portfolio using react.',
            tools: '#react #javascript #typescript #html #css',
            github: 'https://github.com/nikhilhooda35/nh-portfolio',
            link: '/',
        },
        {
            title: 'Medicare',
            desc: 'Medicare is a telemedicine platform developed using the MERN stack',
            tools: '#react #typescript #html #css #nodejs #expressjs #mongodb',
            github: '/', // Private or empty repository
            link: 'https://medicare-rho.vercel.app/',
        },
        {
            title: 'Shoppy',
            desc: 'Shoppy is a Admin platform developed using the MERN stack',
            tools: '#react #typescript #html #css #nodejs #expressjs #mongodb',
            github: 'https://github.com/nikhilhooda35/Shoppy',
            link: 'https://shoppy-olive.vercel.app/',
        }
    ];

    const [filtered, setFilter] = useState(projectData);
    const [currentFilter, setCurrentFilter] = useState<string>("");
    const [showTooltip, setShowTooltip] = useState(false); // State for the tooltip

    useEffect(() => {
        if (currentFilter !== "") {
            let res: any = projectData.filter(f => f.tools.includes(currentFilter));
            setFilter(res);
        } else {
            setFilter(projectData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFilter]);

    const handleCloseFilter = (tool: string) => {
        let filters = currentFilter;
        let newFS = filters.split(" ").filter((fs: string) => fs !== tool);
        setCurrentFilter(newFS.join(" "));
    };

    const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, githubLink: string) => {
        if (githubLink === '/') {
            e.preventDefault(); // Prevent default link behavior
            setShowTooltip(true); // Show tooltip if the repo is private/empty
            setTimeout(() => setShowTooltip(false), 2000); // Hide after 2 seconds
        }
    };

    return (
        <div id="my-projects" className="hero animated fadeInLeft" style={{ animationDelay: '.4s' }}>
            <p className="sub">Featured Projects</p>
            {currentFilter !== "" && currentFilter.split(" ").map((cf: string, i: number) => (
                cf !== "" && <span key={i} className="card-tool-bread" onClick={() => handleCloseFilter(cf)}><span className='card-close'>x</span>{cf}</span>
            ))}
            <div className="wrap">
                {
                    filtered.map((i, q: number) => (
                        <div className="card" key={q}>
                            <div className="card-header">
                                <Folder color="var(--secondary)" size={32} strokeWidth={1} />
                                <div className="card-links">
                                    {
                                        i.github !== "" &&
                                        <a href={i.github} target="_blank" rel="noopener noreferrer" onClick={(e) => handleGithubClick(e, i.github)}>
                                            <GitHub className="link-1" color="var(--sublime)" size={18} strokeWidth={1.5} />
                                        </a>
                                    }
                                    <a href={i.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="link-3" color="var(--sublime)" size={18} strokeWidth={1.5} />
                                    </a>
                                </div>
                            </div>
                            <div className="card-title">{i.title}</div>
                            <div className="card-body" style={{ whiteSpace: 'pre-line' }}>{i.desc}</div>
                            <div className="card-footer">
                                {
                                    i.tools.split(" ").map((t: string, i: number) => (
                                        <span key={i} className="card-tool">{t}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Tooltip */}
            {showTooltip && (
                <div className="tooltip" style={{ position: 'fixed', bottom: '10%', right: '10%', backgroundColor: '#f8d7da', color: '#721c24', padding: '10px', borderRadius: '5px' }}>
                    This is a private repository
                </div>
            )}
        </div>
    );
};

export default Projects;
