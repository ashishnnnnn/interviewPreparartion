import { useFetch } from "./useFetch"
const UseFetchExample = ()=>{
    const [data] = useFetch({url:"https://jsonplaceholder.typicode.com/todos"});

    return(
        <>
            {
                (data && data.length> 0) ?
                <>
                 {
                    data.map((ele)=>{
                        return <h3 key={ele.id}>{ele.title}</h3>
                    })
                 }
                </> : <h1>Loading...</h1>
            }
        </>
    )
}

export default UseFetchExample