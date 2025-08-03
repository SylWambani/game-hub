import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

//cord before refactoring in the useData hook which is a generic hook
/*interface FetchGenresResponse{
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        const controller = new AbortController();
    
        setLoading(true);
        apiClient
          .get<FetchGenresResponse>("/genres", { signal: controller.signal })
          .then((res) => {
            setGenres(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          });
    
        return () => controller.abort();
      }, []);
    
      return { genres, error, isLoading };
};*/

export default useGenres;
