import React from 'react';

class list extends React.Component{ 

 
render () {
const {DetailsAboutJob,Details} = this.props
return (
<div className='inline' >
<div>  
<h6>Posted by</h6>
    <p><img src={Details.photoURL} className='smail' /></p>
    <p>{Details.displayName}</p>
</div>

<div className='left' >  
    <p>Details :{DetailsAboutJob}</p>
</div>
</div>

    )
}

}

export default list;