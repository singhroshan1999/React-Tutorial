import React from 'react';

const withClass = (WrappedComponent,styl) =>{
    return (props)=>(
    <div style = {styl}>
    <WrappedComponent {...props} />
    </div>
)
}

export default withClass;