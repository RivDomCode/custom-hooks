import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({ data: null, loading: true, error: null}); //1.useFetch por defecto tendrá este estado

    useEffect (()=>{

        setState ( {
            data: null, loading: true, error: null   //Setear el estado como estaba de inicio a cada peticion que se hace a la API
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    data: data,
                    loading: false,
                    error:null
                })
            })

    },[url] )

    return state;
}


