<template>
  <div class="container">
    <h2 class="title">Sobre mí</h2>
    <div class="row about-section">
        <div class="col-lg-4 about-card">
            <h3 class="font-weight-light">Resumen</h3>
            <span class="line mb-5"></span>
            <h5 class="mb-3">Desarrollador Full Stack</h5>
            <p class="mt-20">
                Soy Ingeniero en Sistemas, especializado en desarrollo frontend con Vue 3 y Angular.
                En el backend, tengo amplia experiencia con Nest JS, Node.js y Express, siendo Nest JS mi mayor
                fortaleza.
                Además, he trabajado y gestionado con bases de datos MySQL y MongoDB.
            </p>
            <a href="./assets/files/Franz-Flores-CV.pdf" download="Franz_Flores_CV.pdf"
                class="btn btn-outline-danger" target="_blank">
                <i class="icon-down-circled2"></i>Descarga mi CV
            </a>
        </div>
        <div class="col-lg-4 about-card">
            <h3 class="font-weight-light">Información Personal</h3>
            <span class="line mb-5"></span>
            <ul class="mt40 info list-unstyled">
                <li><span>Correo electrónico</span> : andresfloresgallardo@gmail.com</li>
                <li><span>Perfil Github académico</span> :
                  <a href="https://github.com/FranzFlores" target="_blank"> Franz Flores - Perfil Académico</a>
                </li>
                <li><span>Perfil Github profesional</span> : 
                  <a href="https://github.com/franz-andres-flores" target="_blank">Franz Flores - Perfil Profesional</a>
                </li>
            </ul>
            <ul class="social-icons pt-3">
                <li class="social-item">
                    <a class="social-link" href="https://www.facebook.com/franz.flores.7" target="_blank"><i
                            class="ti-facebook" aria-hidden="true"></i></a>
                </li>
                <li class="social-item">
                    <a class="social-link" href="https://x.com/franzandresflo" target="_blank"><i class="ti-twitter"
                            aria-hidden="true"></i></a>
                </li>
                <li class="social-item">
                    <a class="social-link" href="https://github.com/FranzAndresFlores" target="_blank"><i
                            class="ti-github" aria-hidden="true"></i></a>
                </li>
                <li class="social-item">
                    <a class="social-link" href="https://linkedin.com/in/franz-flores-945441238" target="_blank"><i
                            class="ti-linkedin" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
        <div class="col-lg-4 about-card">
            <h3 class="font-weight-light">Experiencia</h3>
            <span class="line mb-5"></span>
            <div class="row">
                <div class="col-1 text-danger pt-1"><i class="ti-harddrives icon-lg"></i></div>
                <div class="col-10 ml-auto mr-3">
                    <h6>Desarrollo Backend</h6>
                    <p class="subtitle">Experiencia con tecnologías como Node JS y Nest JS</p>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-1 text-danger pt-1"><i class="ti-notepad icon-lg"></i></div>
                <div class="col-10 ml-auto mr-3">
                    <h6>Desarrollo Frontend</h6>
                    <p class="subtitle">Experiencia con tecnologías como Amgular y Vue JS</p>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-1 text-danger pt-1"><i class="ti-server icon-lg"></i></div>
                <div class="col-10 ml-auto mr-3">
                    <h6>Base de Datos</h6>
                    <p class="subtitle">Experiencia con gestores de BD como MySQL, MongoDB y Neo4j</p>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.title {
  margin: 6vh 0;
}

.about-section .about-card {
  padding: 60px;
  border-right: 1px solid #dee2e6;
  border-left: 1px solid #dee2e6;
}

a {
  color: #F85C70;
  text-decoration: none;
  background-color: transparent;
}
</style>
