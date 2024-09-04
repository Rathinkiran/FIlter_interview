export const Dropdown =({Details,onChange}) => {
    return <>
    <select style={{padding:10}} type="text" placeholder='Refine' onChange={onChange}>Filters

     <option>Refine By           -</option>
    {Details.map(function(detail){
      return <option>
        <p>{detail.name}</p>
        </option>
    })}
    </select>
 
    </>
}