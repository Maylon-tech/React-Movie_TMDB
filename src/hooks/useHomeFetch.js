import { useEffect, useState, useRef } from "react"

// API
import API from '../API'




export const useHomeFetch = () => {
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false)
            setLoading(true)

            const movies = await API.fetchMovies(searchTerm, page)

            setState(prev => ({
                ...movies,
                results:
                page > 1 ? [...prev.results, ...movies.results] : [...movies.results]

            }))
        } catch(error) {
            setError(true)
        }
    }

    useEffect(() => {   
         fetchMovies(1)
    }, [])

}