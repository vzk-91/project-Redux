export const blogersFetchAction = (data) =>{
    return {
        type : "Fetch_Blogers",
        payload : data

    }
}

export const postsFetchAction = (data) =>{
    return {
        type : "Fetch_Posts",
        payload : data
    }
}