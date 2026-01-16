'use client'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment, reset } from "@/store/slices/counterSlice";

export default function Counter(){
    const count = useAppSelector((state)=>state.counter.value)
    const dispatch = useAppDispatch();
    return (
        <div className="p-4">
            <div>count is : {count}</div>
            <div className="flex gap-4">
                <button className="px-4 py-2 rounded bg-black text-white" onClick={()=>dispatch(increment())}>increment</button>
            <button className="px-4 py-2 rounded bg-black text-white" onClick={()=>dispatch(decrement())}>decrement</button>
            <button className="px-4 py-2 rounded bg-black text-white" onClick={()=>dispatch(reset())}>reset</button>
            </div>
        </div>
    )
}