import { useEffect, useRef, useState } from "react";
import "./style.css";

const InfinteScroll = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const loading = useRef(false)
    const fetchData = async () => {
        try {
            if(loading.current){
                return;
            }
            loading.current = true
            const request = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
            const newData = await request.json();
            setData((prevData) => [...prevData, ...newData]);
        } catch (e) {
            console.error("Error fetching data:", e);
        }
        finally{
            loading.current = false;
        }
    };

    const handleScroll = () => {
        if(loading.current){
            return;
        }
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 50
        ) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="container">
            {data.length > 0 &&
                data.map((ele, idx) => (
                    <div className="box" key={idx}>
                        {ele.title}
                    </div>
                ))}
        </div>
    );
};

export default InfinteScroll;
