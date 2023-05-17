
import { BURL, BEARER, DEFAULT_PAGE_SIZE, DEFAULT_KEYWORD } from "./Constants";
import axios from "axios";

// Main functions for get All data related to SEARCH.
export const getVersions = async (PARAM, next) => {
    const { KEYWORD, SIZE, FROM } = PARAM;
    const {data} = await axios.get(`${BURL}/search?term=${KEYWORD || DEFAULT_KEYWORD}&latitude=${34.075375}&longitude=${-84.294090}`,
                                {
                                    headers: { "Authorization": `${BEARER}`,
                                    "Access-Control-Allow-Origin": "*",
                                    }   
                                }
    );

    debugger
    //https://api.yelp.com/v3/businesses/search?term=ice cream&latitude=34.075375&longitude=-84.294090
    return next(data)
}