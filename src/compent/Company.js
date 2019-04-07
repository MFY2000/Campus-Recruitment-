import React from 'react';

class list extends React.Component{ 

 
render () {
const {Company_Name,
  Office_Addears,
  Office_Phone_Number,} = this.props
return (
<div className='Width'>
<h6>More Details</h6>
  
<div className='inline' >
<div>  
    <p>Company_Name : {Company_Name}</p>
</div>

<div className='left' >  
    <p>Office_Addears : {Office_Addears}</p>
    <p>Office_Phone_Number : {Office_Phone_Number}</p>
</div>
</div>

</div>
    )
}

}

export default list;