import "./Categories.css";
import { categoryData } from "./CategoryArr";

const Categories = () => {
  return (
    <div className="categoryContainer">
      <div>Customer Favorites</div>
      <div>Popular Categories</div>
      <div>
        {categoryData.map((category) => {
          return (
            <div key={category.name} className="mappedCategories">
              <div className="categoryImg">
                <img src={category.img} />
              </div>
              <div className="categoryName">{category.name}</div>
              <div className="categoryCount">{category.count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
