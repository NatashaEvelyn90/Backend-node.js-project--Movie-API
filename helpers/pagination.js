const paginationResults = (obj) => { 
    let results = {}

    const query = obj.query ? obj.query : {}

    let page = parseInt(query.page) || 1
    let limit = parseInt(query.limit) || 12

    const startIdx = (page - 1) * limit
    const endIdx = page * limit 

    results.page = page
    results.limit = limit
    results.startIdx = startIdx
    results.endIdx = endIdx
    
    return results
}