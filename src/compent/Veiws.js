import React from 'react';

class list extends React.Component{ 

 
render () {
const {Salary,
    Details,
    Job_Detials,
     
} = this.props

return (
<div className='inline' >
<div>  
<h6>Posted by</h6>
    <p><img src={Details.photoURL} className='smail' /></p>
    <p>{Details.displayName}</p>
    <p>Job_Detials : {Job_Detials}</p>
    <p>Salary :{Salary}</p>

</div>


</div>

    )
}

}

export default list;