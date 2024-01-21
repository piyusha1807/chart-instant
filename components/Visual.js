import React from 'react';
import Plot from 'react-plotly.js';

const Visual = ({data, layout, config}) => {
    return(
        <Plot
        data={data}
        layout={layout}
        config={config}
      />
    )
}

export default Visual;
