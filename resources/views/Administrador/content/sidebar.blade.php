<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="{{asset('img/user2-160x160.jpg')}}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ Auth::user()->username }}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item has-treeview">
              <router-link class="nav-link" to="/Usuarios/Visualizar">
                <i class="nav-icon fas fa-users"></i>
                  <p>Usuarios</p>
              </router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/Empresas/Visualizar">
              <i class="nav-icon fas fa-city"></i>
                  <p>Empresas</p>
              </router-link>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
            <i class="nav-icon fas fa-map-marker-alt"></i>
              <p>
                Locacion
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">3</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link" to="/Location/Departamento/Visualizar">
                <i class="far fa-circle nav-icon"></i>
                    <p>Departamento</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Location/Provincia/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Provincia</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Location/Distrito/Visualizar">
                 <i class="far fa-circle nav-icon"></i>
                    <p>Distrito</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/Rol/Visualizar">
              <i class="fas fa-users nav-icon"></i>
                  <p>Alumnos</p>
              </router-link>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
            <i class="nav-icon fas fa-box-open"></i>
              <p>
                Almacen
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">3</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Area/Visualizar">
                <i class="far fa-circle nav-icon"></i>
                    <p>Areas</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Curso/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Cursos</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Modulo/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Modulos</p>
                </router-link>
              </li>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
            <i class="nav-icon fas fa-id-badge"></i>
              <p>
                Workes
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">2</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link" to="/Matriculador/Visualizar">
                <i class="far fa-circle nav-icon"></i>
                    <p>Matriculadores</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Cobrador/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Cobradores</p>
                </router-link>
              </li>
              </li>
            </ul>
          </li>
          <!-- <li class="nav-item">
              <router-link class="nav-link" to="/Rol/Visualizar">
              <i class="fas fa-unlock-alt nav-icon"></i>
                  <p>Roles</p>
              </router-link>
          </li> -->
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
            <i class="nav-icon far fa-copy"></i>
              <p>
                Operaciones
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">3</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Area/Visualizar">
                <i class="far fa-circle nav-icon"></i>
                    <p>Matriculas</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Curso/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Matriculas Concluidas</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Modulo/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Matriculas Retiradas</p>
                </router-link>
              </li>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
            <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Reportes
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">5</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Area/Visualizar">
                <i class="far fa-circle nav-icon"></i>
                    <p>Liquidacion</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Curso/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Cobranza</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Modulo/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Pagados</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Modulo/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Matriculas</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Almacen/Modulo/Visualizar">
                  <i class="far fa-circle nav-icon"></i>
                    <p>Matriculas Retiradas</p>
                </router-link>
              </li>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>