import React from 'react';

function Footer(){
    return (
        <React.Fragment>
		<footer>
    <div className="top-footer">
    <section>
        <h3>Contacto</h3>
        <ul>
            <li>Dirección</li>
            <li>Telefono</li>
            <li>Mail</li>
        </ul>
    </section>
    <section>
        <h3><a href="/" >About us</a></h3>
    </section>
    <section>
        <h3><a href="/" >Terminos y Condiciones</a></h3>
    </section>
    <section className="redes-sociales">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
    </section>
    </div>
    <section>
        <p className="copyright">Copyright © 1999-2020 EN MOVIMIENTO S.R.L.</p>
    </section>
</footer>

        </React.Fragment>
    )
}
export default Footer;