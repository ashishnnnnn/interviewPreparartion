import { useEffect, useRef } from "react";

export const usePrevious = (value)=>{
    const previousValueRef = useRef(value);

    useEffect(()=>{
        previousValueRef.current = value;
    },[value])

    return [previousValueRef.current]
}

