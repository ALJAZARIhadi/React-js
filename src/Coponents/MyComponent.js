export default function MyComponent({value,handleChange,currentInputs})
{
    return(
        <>
            <label>Phone Number</label>
            <input 
            value={value}
            onChange={(e) =>{
                handleChange({...currentInputs,phoneNumber:e.target.value})
            }}
            />
        </>
    )
}
