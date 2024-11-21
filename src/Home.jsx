import {Link} from 'react-router-dom'
const Home = ({data}) => {
  return (
    <>
    <h2>Lista de Tareas</h2>
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <Link to={`/${item._id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
    </>
  )
};

export default Home;
