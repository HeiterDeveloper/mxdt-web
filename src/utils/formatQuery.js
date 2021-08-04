
const formatQuery = (obj) => {

    let paramns = [];
    Object.entries(obj).forEach((item) => {
        paramns.push(`${item[0]}=${item[1]}`);
    });
    return paramns.join("&");
}

export default formatQuery;