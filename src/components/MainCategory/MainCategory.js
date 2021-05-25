import { Link } from 'react-router-dom';
import './MainCategory.css';

function MainCategory() {
  return (
    <main> 
        <Link className="category" to="/CategoryPage">heh</Link>
        <MainCategory
              title="Inneplanter"
              imageUrl="alove-vera.jpg"
          />
          <MainCategory
              title="UtePlanter"
          />
          <MainCategory
              title="Potter"
          />
          <MainCategory
               title="Dyrk selv"
          />
          <MainCategory
              title="Jord"
          />
    </main>
  );
}
export default MainCategory;



