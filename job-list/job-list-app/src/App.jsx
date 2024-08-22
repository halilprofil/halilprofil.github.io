import { useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "https://dummyjson.czaylabs.com.tr/exam/jobs/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

function App() {
const [filter, setFilter] = useState([]);

  function handleDeleteBtn(tag){
  setFilter(filter.filter((x)=> x !== tag ))  
  
  }

  function handleClearBtn(){
    setFilter([]);
    
  }

  return (
    <>
      <header className="header">
        <div className="filter-tag">
        {filter && filter.map((f,i)=> (<button onClick={()=>handleDeleteBtn(f)} key={i}>{f}<p>x</p></button> ))}
         <button className={filter.length > 0 ? 'block' : 'none'} onClick={handleClearBtn}>clear</button>
        </div>
        </header>
      <Jobs setFilter={setFilter} filter={filter} />
    </> 
  );
}




function Jobs({filter,setFilter}) {



  function addFilter(keyword) {
    if (filter.includes(keyword)) {
      return;
    }
    setFilter((prevFilters) => {
      const updatedFilters = [...prevFilters, keyword];
      return updatedFilters;
    });
  }

  data.forEach((x) => {
    x.tags = [x.role, x.level, ...x.languages, ...x.tools];
  });

  const filteredData = data.filter((x) => {
    let foundFilteredCount = 0;
    for (const filteredTag of filter) {
      if (x.tags.includes(filteredTag)) {
        foundFilteredCount++;
      }
    }
    if (filter.length === foundFilteredCount) {
      return true;
    }
  });

  console.log(filteredData);

  return (
    <div className="jobs">
      {filteredData.map((x) => (
        <JobItem key={x.id} {...x} addFilter={addFilter} />
      ))}
    </div>
  );
}

function JobItem({ company, logo, new: isNew, featured, position, postedAt, contract, location, tags, addFilter }) {
  return (
    <div className={featured ? "jobItem featuredJob" : "jobItem"}>
      <div className="jobDetails">
        <a href="#" className="companyLogo">
          <img src={logo} alt={company} />
        </a>
        <h4>
          <a href="#">{company}</a>
          {isNew && <span className="new">new!</span>}
          {featured && <span className="featured">featured</span>}
        </h4>
        <h3>{position}</h3>
        <p>
          {postedAt} • {contract} • {location}
        </p>
      </div>

      <div className="jobTags">
        {tags.map((x, i) => (
          <a
            href="#"
            key={i}
            onClick={(e) => {
              e.preventDefault();
              addFilter(x);
            }}
          >
            {x}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
