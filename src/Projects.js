import {useEffect, useState} from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Card } from './Card';
export const Project = () => {
const [value, setValue] = useState([]);
const [currentSubProject, setCurrentSubProject] = useState(null);

useEffect(() => {
    fetch('http://localhost:3001')
    .then(response => response.json())
    .then(data => setValue(data));

},[]);
console.log(value);
    return value.projects ?(
        <div className="Project">
        <h1>Projects</h1>
        <div style={{display: "flex", flexDirection: 'column', width: "100%", textAlign: "left"}}>
        <div>
            {value.projects.map((project, index) =>  {
            return <div style={{border: "1px solid black"}}>
                <h1 key={index}>{project.name}</h1>

                    {project.subprojects.map((subProject, index) => {
                    return <>
                    <div key={index} style = {{border: "1px solid black" , width: "100px", marginLeft: "20px"}}>{subProject.name}</div>
                    <div style={{border: "1px solid black" , marginTop: "10px"}}>
                    <p style={{}}>{"Tasks"}</p>
                    <DndProvider backend={HTML5Backend}>
                    {subProject.tasks.map((tasks, index) => {
                    //    return <Card
                    //     key={card.id}
                    //     index={index}
                    //     id={card.id}
                    //     text={card.text}
                    //     moveCard={moveCard}
                    //   />
                         return <div style={{marginLeft: "20px",marginTop: "20px", border: "1px solid black" , width: "100px"}}>{tasks.name}</div>
                    })}
                    </DndProvider>
                    </div>
                    </>
                    })}
                </div>
            }
            )}
            </div>
        </div>
        </div>
    ) : <></>;
}