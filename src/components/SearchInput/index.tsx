import "./styles.scss"

interface ISearch {
    search: string;
    setSearch: Function
  }

const SearchInput: React.FC<ISearch> = ({ search, setSearch }): JSX.Element  => {
    return (
        <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="search"></label>
            <input
                id="search"
                type="text"
                role="searchbox"
                placeholder="Example: cat"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </form>
    )
}

export default SearchInput