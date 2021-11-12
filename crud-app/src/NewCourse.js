import { useState } from "react";


const NewCourse = () => {
    const[course, setCourse] = useState('');
    const[grade, setGrade] = useState(0);
    const[code, setCode] = useState(0);
    
    const handlePost = (e)=> {
        e.preventDefault();
        const newCourseObj = {course, grade, code};
        fetch('http://localhost:3000/api/addCourse',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newCourseObj) 

        })
        .then(()=>{console.log('POSTED');})
        
    }
        
        <div className = "new-course">
            <h2> Post a course</h2>
            <form onSubmit={handlePost}>
                <label>
                    Course Name:
                    <input type="text" required 
                    value={course} onChange = {(e) => setCourse(e.target.value)}/>  
                </label>

                <label>
                    Course Code:
                    <input type="number" required 
                    value={code} onChange = {(e) => setCode(e.target.value)}/>  
                </label>

                <label>
                    Course Grade:
                    <input type="number" required 
                    value={grade} onChange = {(e) => setGrade(e.target.value)}/>  
                </label>

                <button>POST</button>

            </form>
        </div>

    return { };

} 
