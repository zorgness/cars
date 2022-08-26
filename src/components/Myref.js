import React from 'react';

const Myref = React.forwardRef((props, ref) => {

  console.log(props);
  console.log(ref);

    return (
      <div>

        <input ref={ref}type="text"/>

      </div>
    )
})

export default Myref
