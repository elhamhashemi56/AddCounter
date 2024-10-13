import React, { useState } from "react";
import "./todo.css"
import { isDisabled } from "@testing-library/user-event/dist/utils";

function TodoList({todo,setTodo}){

    const [grade,setGrade]=useState(1)
    const [fullName,setFullName]=useState("")
    const [subject,setSubject]=useState("")

    function handleInt(){
        if(grade<6){
            setGrade(grade+1)
            console.log("grade",grade);
            
        }
       
    }

    function handleDec(){
        if(grade>1 && grade<=6){
            setGrade(grade-1)
        }
       
    }

    function handleChangeFullName(e){
        setFullName(e.target.value)
        console.log(fullName);
        
    }
    
   
    const handleChangeSubject=(event)=>{
        setSubject(event.target.value)
        console.log(subject);
        
    }

    const handleClick=()=>{
        const copy=[...todo]
        copy.push({
            fullName:fullName,
            subject:subject,
            grade:grade
        })
        setTodo(copy)
        console.log(copy);
        setFullName("")
        setSubject("Please Select your Subject")

        
    }
function handleSubmit(event){
    event.preventDefault()
}
//#######################################################    
    return(
        <div className="todoContainer">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input  class="form-control"
                            placeholder="Enter Your Name"
                            value={fullName}
                            onChange={handleChangeFullName} 
                             
                    />  
                </div>
                <select class="form-control mb-3" aria-label="Default select example"  onChange={handleChangeSubject} >
                    <option selected>Please Select your Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science (Biology, Chemistry, Physics)</option>
                    <option value="Language Arts">Language Arts (English, Grammar, Writing)</option>
                    <option value="Social Studies">Social Studies (History, Geography, Civics)</option>
                    <option value="Foreign Languages">Foreign Languages (Spanish, French, German, etc.)</option>
                    <option value="Physical Education">Physical Education (PE)</option>
                    <option value="Fine Arts">Fine Arts (Art, Music)</option>
                    <option value="Computer Science/Technology">Computer Science/Technology</option>
                    <option value="Health Education">Health Education</option>
                    <option value="Career and Technical Education">Career and Technical Education (CTE)</option>
                </select>
                <label for="disabledTextInput">Grade:</label>
                <div className="gradeContainer mb-2">
                     { (grade===1 || grade===2) &&
                        <fieldset  disabled className="fieldsetKlass fieldsetGreen">{grade}
                        </fieldset>
                     } 
                     { (grade===3 || grade===4) &&
                        <fieldset  disabled className="fieldsetKlass fieldsetYellow">{grade}
                        </fieldset>
                     }
                     { (grade===5 || grade===6) &&
                        <fieldset  disabled className="fieldsetKlass fieldsetRed">{grade}
                        </fieldset>
                     }  
                    <div>
                       { grade === 6 ?<button type="button"  class="btn btn-secondary ml-3" disabled={isDisabled}>+INC</button>
                                     :<button type="button" class="btn btn-danger ml-3" onClick={handleInt}>+INC</button>
                       }
                       { grade === 1 ?<button type="button"  class="btn btn-secondary ml-3" disabled={isDisabled}>-DEC</button>
                                     :<button type="button" class="btn btn-danger ml-3" onClick={handleDec}>-DEC</button>
                       }  
                        
                    </div>
                    
                </div>

                   

                
                <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default TodoList