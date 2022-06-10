import axios from "axios";
import { useState } from "react"

const useAxios = () => {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            setResponse(res.data.drinks[0])
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return {
        response,
        loading,
        error,
        fetchData
    }
}

export default useAxios