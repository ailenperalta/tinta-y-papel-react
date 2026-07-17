# 📚 Tinta & Papel

🌐 **Demo online:** https://tinta-y-papel-react.vercel.app/

Aplicación web desarrollada con **React + Vite** para la gestión de una librería online.

El proyecto permite navegar un catálogo de libros, visualizar su información, administrar un carrito de compras y gestionar productos desde un panel de administración protegido mediante autenticación con Firebase.

---

## ✨ Funcionalidades

### 🛍️ Tienda

- Visualización del catálogo de libros.
- Vista de detalle de cada producto.
- Agregar productos al carrito.
- Modificar cantidades desde el carrito.
- Eliminar productos individuales.
- Vaciar carrito completo.
- Persistencia del carrito mediante Local Storage.
- Resumen de compra con cálculo automático del total.

### 🔐 Administración

- Inicio de sesión mediante Firebase Authentication.
- Protección de rutas privadas.
- Dashboard de administración.
- Alta de nuevos productos.
- Subida de imágenes a ImgBB.
- Almacenamiento de productos en Firebase Firestore.

---

## 🛠️ Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- Firebase Authentication
- Firebase Firestore
- ImgBB API
- React Icons
- CSS

---

## 📁 Estructura del proyecto

```
src/
│
├── components/
│   ├── adminComponent/
│   │   └── Dashboard/
│   ├── Cart/
│   ├── Count/
│   ├── Footer/
│   ├── Header/
│   ├── Item/
│   ├── ItemDetail/
│   ├── ItemDetailContainer/
│   ├── ItemList/
│   ├── ItemListContainer/
│   ├── Login/
│   ├── Nav/
│   └── ProtectedRoute/
│
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
│
├── firebase/
│   └── config.js
│
├── layouts/
│   ├── AdminLayout.jsx
│   └── PublicLayout.jsx
│
├── services/
│   ├── productsService.js
│   └── uploadImage.js
│
├── utils/
│
└── App.jsx
```

---

## 🚀 Instalación

Clonar el repositorio

```bash
git clone <url-del-repositorio>
```

Ingresar a la carpeta

```bash
cd nombre-del-proyecto
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

---

## ⚙️ Acceso al panel de administración

La aplicación cuenta con un panel de administración protegido mediante Firebase Authentication.

Para acceder:

- Ruta: `/admin/login`
- Ingresar con:
    
    Email: `admin@admin.com`
    Contraseña: `admin123`

---

## 👩‍💻 Desarrollado por:

**Ailén Peralta**

Proyecto para el curso de React JS - Talento Tech