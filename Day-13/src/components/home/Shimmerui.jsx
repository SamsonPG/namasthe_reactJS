const Shimmer = ()=>{
    return(
        <>
        {Array(8).fill("").map((e, index)=>(
            <div data-testid="shimmer" key={index} className="shimmer-card">
            <div className="shimmer-image-container"></div>
            <br/>
            <h3 className="shimmer-text"></h3>
            <h4 className="shimmer-text"></h4>
            <h6 className="shimmer-text"></h6>
            <h5 className="shimmer-text"></h5>
            </div>)
        )}
          </>
    )
  
}

export default Shimmer;

