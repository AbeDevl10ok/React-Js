import { useState } from "react"

export function useSort(){
    const [sort, setSort] = useState(false)
    
    const handleSort=()=>{
        setSort(!sort);
      }
    
    
    return {
        sort,
        handleSort
    }
}