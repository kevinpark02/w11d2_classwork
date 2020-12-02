export const fetchTea = (id) => {
    return $.ajax({
        url: `/api/teas/${id}`,
        method: "GET"
    })
}