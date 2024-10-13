import React from "react";
import "./todo.css"

function TodoList(){
    return(
        <div className="todoContainer">
            <form>
                <div class="mb-3">
                    <input  class="form-control"
                            placeholder="Enter Your Name" 
                             
                    />  
                </div>
                <select class="form-control mb-3" aria-label="Default select example" >
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
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default TodoList