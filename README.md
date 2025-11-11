# App SaaS

Aplicación completa de administración de suscripciones desarrollada con **Next.js** y **Stripe**, que permite gestionar planes, miembros, invitaciones y pagos de forma sencilla y segura.

🔗 **Demo:** [app-saas-rho.vercel.app](https://app-saas-rho.vercel.app/)

💻 **Repositorio:** [github.com/Kenkyoo/app-saas](https://github.com/Kenkyoo/app-saas)

---

## 🚀 Tecnologías principales

* **Next.js 15** (App Router)
* **PostgreSQL** con **Neon**
* **Drizzle ORM**
* **Stripe API** para pagos y suscripciones
* **TailwindCSS** + **shadcn/ui**
* **Autenticación** personalizada con JWT y bcrypt

---

## ⚙️ Características principales

* Registro e inicio de sesión de usuarios.
* Creación y administración de equipos.
* Integración completa con **Stripe Checkout** y **Billing Portal**.
* Planes de suscripción dinámicos con prueba gratuita.
* Secciones: **Planes**, **Miembros**, **Invitaciones**, **Configuración**.
* Base de datos conectada con **Drizzle ORM** sobre **Postgres (Neon)**.

---

## 📦 Scripts disponibles

```bash
npm run dev          # Inicia el entorno de desarrollo
npm run build        # Construye la aplicación para producción
npm run start        # Inicia la app en producción
npm run db:setup     # Configura la base de datos
npm run db:seed      # Carga datos iniciales
npm run db:migrate   # Ejecuta migraciones
npm run db:studio    # Abre Drizzle Studio
```

---

## 💳 Integración con Stripe

El proyecto usa la API oficial de Stripe para gestionar:

* Sesiones de pago y prueba gratuita.
* Portal del cliente para modificar o cancelar suscripciones.
* Webhooks para actualizar el estado de las suscripciones en la base de datos.

Los productos y precios se obtienen directamente desde Stripe para asegurar sincronización.

---

## 🧱 Estructura general

```
app/
 ├─ api/stripe/         → Endpoints para Stripe
 ├─ dashboard/          → Panel de administración
 ├─ pricing/            → Página de planes
 ├─ auth/               → Registro e inicio de sesión
lib/
 ├─ db/                 → Configuración y esquema de Drizzle
 ├─ utils/              → Funciones auxiliares
 └─ stripe/             → Configuración e interacción con Stripe
```

---

## 🔐 Variables de entorno

```env
DATABASE_URL=your_neon_database_url
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
BASE_URL=https://app-saas-rho.vercel.app
JWT_SECRET=your_secret_key
```

---

## 🧑‍💻 Autor

**Franco**
Frontend Developer
[GitHub @Kenkyoo](https://github.com/Kenkyoo)

---

## 🪄 Deploy

Hecho con ❤️ y desplegado en **Vercel**.
