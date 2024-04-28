import React from 'react'

export default function booking() {
  return (
    <div>
      
      <form>

        {/* 1 */}
  <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" class="form-control" id="firstName"  placeholder="Enter first name"/>
    <label for="lastName">Last Name</label>
    <input type="text" class="form-control" id="lastName" placeholder="Enter last name"/>
  </div>


{/* 2 */}
  <div class="form-check">
  <h4>Number of Wheels</h4>
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
    2 Wheeler
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
  4 Wheeler
  </label>
</div>

{/* 3 */}
  
<div class="form-check">
  <h4>Type of Vehical</h4>
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
  <p> show vehicals based on wheeler type in list form using hooks (hatchback, suv, sedan, etc)</p>
  </label>
</div>

{/* 4 */}
<div class="form-check">
  <h4>Specific Model</h4>
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
  <p> show vehicals based on type selection in list form using hooks ()</p>
  </label>
</div>

{/* 5 */}
      <label htmlFor="dateInput">Select booking start date:</label>
      <input
        type="date"
        id="dateInput"
      /><br/>
      <label htmlFor="dateInput">Select booking end date:</label>
      <input
        type="date"
        id="dateInput"
      /><br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
