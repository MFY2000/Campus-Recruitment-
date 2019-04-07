import React from 'react';

class list extends React.Component{ 

 
render () {
const {Skill,
  Feilds,
  Addears,
  Phone_Number,} = this.props
return (
<div className='Width'>
<h6>More Details</h6>
  
<div className='inline' >
<div>  
    <p>Skill : {Skill}</p>
    <p>Feilds : {Feilds}</p>
</div>

<div className='left' >  
    <p>Addears : {Addears}</p>
    <p>Phone_Number : {Phone_Number}</p>
</div>
</div>

</div>
    )
}

}

export default list;