class APIFetch {
    constructor() {
        this.BASEURL = "https://api.themoviedb.org/3"
        this.APIKEY = "f531333d637d0c44abc85b3e74db2186"
    }

    _makeRequest = async (url) => {
        const response = await fetch(url)
        const data = await response.json();
        return data;
    }

    fetchMovies = async (page_count) => {
        const url = `${this.BASEURL}/movie/top_rated?api_key=${this.APIKEY}&language=en-US&page=${page_count}`;
        const response = await this._makeRequest(url);
        return response;
    }

    fetchMovie = async (mid, page_count) => {
        const url = `${this.BASEURL}/movie/${mid}?api_key=${this.APIKEY}&language=en-US&page=${page_count}`;
        const response = await this._makeRequest(url);
        return response;
    }

    fetchSeries = async (page_count) => {
        const url = `${this.BASEURL}/tv/top_rated?api_key=${this.APIKEY}&language=en-US&page=${page_count}`;
        const response = await this._makeRequest(url);
        return response;
    }

    fetchSeriesById = async (sid, page_count) => {
        const url = `${this.BASEURL}/tv/${sid}?api_key=${this.APIKEY}&language=en-US&page=${page_count}`;
        const response = await this._makeRequest(url);
        return response;
    }

    search_movie = async (query, page_count) => {
        const url = `${this.BASEURL}/search/movie?query=${query}&api_key=${this.APIKEY}&language=en-US&page=${page_count}&include_adult=false`;
        const response = await this._makeRequest(url);
        return response;
    }

    search_tv = async (query, page_count) => {
        const url = `${this.BASEURL}/search/tv?query=${query}&api_key=${this.APIKEY}&language=en-US&page=${page_count}&include_adult=false`;
        const response = await this._makeRequest(url);
        return response;
    }

    home_movies = async (page_count) => {
        const url = `${this.BASEURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page_count}&sort_by=popularity.desc&api_key=${this.APIKEY}`
        const response = await this._makeRequest(url);
        return response;
    }

    home_series = async (page_count) => {
        const url = `${this.BASEURL}/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page_count}&sort_by=popularity.desc&api_key=${this.APIKEY}`
        const response = await this._makeRequest(url);
        return response;
    }

    login = async (username, password) => {

    }
    signUp = async () => {

    }

    image = (iid) => {
        const url = `https://image.tmdb.org/t/p/w500${iid}`;
        return url;
    }
}
export default APIFetch;
