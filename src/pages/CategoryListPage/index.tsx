import React, { useEffect } from "react";

// import route to page
import routeMain from "./routes";

//Components
import CategoryMoviesList from "components/CategoryMoviesList";

//Services
import { getAllMoviesOnQuery } from "services/getMoviesOnQuery";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadQueryMoviesAll } from "store/queryMoviesAll/actions";
import { selectQueryMoviesAll } from "store/queryMoviesAll/selectors";

//Styles
import "./styles.scss";

const CategoryListPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const queryMoviesAllList = useSelector(selectQueryMoviesAll);

  useEffect(() => {
    dispatch(loadQueryMoviesAll(getAllMoviesOnQuery));
  }, [dispatch]);

  return (
    <section className="category-page">
      {queryMoviesAllList.length > 0 && (
        <CategoryMoviesList list={queryMoviesAllList.slice(0, 24)} />
      )}
    </section>
  );
};

export { routeMain };

export default CategoryListPage;
