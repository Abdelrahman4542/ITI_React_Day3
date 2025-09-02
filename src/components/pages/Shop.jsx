import { Outlet, Link } from 'react-router-dom';
import styles from '../Navbar.module.css'; 

function Shop() {
  return (
    <div style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
      <aside style={{ width: "200px" }}>
        <h2>Filter by Category</h2>
        <ul className={styles.list}>
          <li><Link to="">All</Link></li>
          <li><Link to="men">Men</Link></li>
          <li><Link to="women">Women</Link></li>
        </ul>
      </aside>

      <section style={{ flex: 1, borderLeft: "1px solid #ddd", paddingLeft: "1rem" }}>
        <Outlet />
      </section>
    </div>
  );
}

export default Shop;
