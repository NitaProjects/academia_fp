# 📚 Proyecto Escuela FP – Frontend Angular

Este proyecto es una SPA desarrollada con Angular 17 que actúa como interfaz de usuario para consumir la API RESTful del backend Laravel. Permite a profesores y alumnos gestionar módulos, unidades formativas, evaluaciones y más funcionalidades educativas.

## 🚀 Tecnologías utilizadas

- ✅ Angular 17 + TypeScript
- 🔁 RxJS
- 🎨 Angular Material
- 🧭 Angular Router
- 🔐 JWT vía Laravel Sanctum
- 🧪 Jasmine + Karma (testing)
- ☁️ GitHub Actions (CI/CD)
- ⚙️ Bootstrap (opcional)

## 🧠 Estructura de componentes y servicios

src/
  app/
    components/           # Componentes generales y reutilizables
    pages/                # Vistas principales (Login, Dashboard, etc.)
    services/             # Comunicación con API Laravel
    models/               # Interfaces TypeScript (Modul, Uf, Alumne, etc.)
    guards/               # AuthGuard para proteger rutas
    interceptors/         # Añade token JWT automáticamente
    app-routing.module.ts
    app.module.ts
  assets/
  environments/
angular.json

## 🔐 Autenticación y protección de rutas

- El login obtiene un token JWT desde Laravel Sanctum.
- El token se guarda en localStorage.
- Las rutas se protegen mediante AuthGuard.
- Se usa un HTTP Interceptor para añadir automáticamente el header:

Authorization: Bearer TOKEN

### ✅ Ejemplo de login

this.authService.login(email, password).subscribe({
  next: (res) => {
    localStorage.setItem('token', res.token);
    this.router.navigate(['/dashboard']);
  }
});

## 📲 Consumo de la API Laravel

Cada entidad del backend tiene su servicio Angular dedicado, por ejemplo:

@Injectable({ providedIn: 'root' })
export class ModulService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Modul[]> {
    return this.http.get<Modul[]>('/api/moduls');
  }

  create(modul: Modul): Observable<Modul> {
    return this.http.post<Modul>('/api/moduls', modul);
  }
}

## 🧰 Instalación local

git clone https://github.com/NitaProjects/academia_fp.git
cd academia_fp
npm install
ng serve --open

Asegúrate de tener el backend corriendo en http://localhost:8000

Configura el environment.ts con la URL base correcta:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api'
};

## ✅ Testing

ng test

- Se usa Jasmine y Karma
- Tests para componentes, servicios, guards y pipes
- Mocks para endpoints protegidos

## 🚀 Despliegue en producción

ng build --configuration=production

Puedes desplegar en:
  - Netlify
  - Vercel
  - GitHub Pages
  - VPS con Nginx

### CI/CD con GitHub Actions

# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build --configuration production
      - name: Deploy
        run: echo "Aquí va tu script de deploy"

## 🎓 Recomendaciones

- Usa tipado estricto (strict: true en tsconfig)
- Divide componentes en módulos con lazy loading
- Reutiliza componentes para formularios CRUD
- Usa ReactiveForms para validaciones avanzadas
- Mantén lógica de negocio en servicios, no en componentes
- Utiliza guards e interceptors para seguridad
- Testea antes de hacer deploy 🧪

## 🔗 Recursos útiles

- https://angular.io/docs
- https://rxjs.dev/
- https://jwt.io/
- https://material.angular.io/
- https://restfulapi.net/

## 👨‍💻 Autor

Daniel Nita – DAW 2 – Proyecto UF4 Angular
