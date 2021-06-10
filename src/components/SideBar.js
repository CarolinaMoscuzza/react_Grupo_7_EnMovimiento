import React from 'react';
import image from '../assets/images/LogoNew5.png';
import ContentWrapper from './ContentWrapper';
import UltimoProductoInDb from './UltimoProductoInDb';
import ContentRowProductos from './ContentRowProductos';
import ProductList from './ProductList';
import ProductInDb from './ProductInDb';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="logo"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        
                        <i className="fas fa-running"></i>
                        <span> Menu </span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Opciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowProductos">
                        <i className="fas fa-shopping-bag"></i>
                        <span>Compras</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
                
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ProductList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Buscar Productos</span></Link>
                </li>

                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchUsuarios">
                        <i className="fas fa-user"></i>
                        <span>Buscar Usuarios</span></Link>
                </li>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/UltimoProductoInDb">
                <UltimoProductoInDb />
            </Route>
            /*<!--<Route path="/ContentRowMovies">
              /*<!--  <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/ProductInDb">
                    <ProductInDb />
                </Route> 
                <Route path="/UltimoProductoInDb">
                    <UltimoProductoInDb />
                </Route>
                <Route path="/ContentRowProductos">
                    <ContentRowProductos />
                </Route>
                <Route path="/ProductList">
                    <ProductList />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;