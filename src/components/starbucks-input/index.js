export default({name,value,error,onChange})=>{
  return (
    <>
    <p>{error}</p>
    <label htmlFor={name}>{name}</label>
    <input id={name} value={value} onChange={(e)=>{onChange(e.target.value)}} />
    </>
  )
}