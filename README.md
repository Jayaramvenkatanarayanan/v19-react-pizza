# 🍕 Padre Gino’s Pizza
### Modern Pizza Ordering Web App
**Built with Bun + Vite + React 19 | Using Latest React Features**

Padre Gino’s Pizza is a fast, responsive, and modern pizza ordering platform designed using cutting-edge frontend technologies. The project showcases real-world architecture, latest React features, performance-oriented state handling, reusable UI components, and clean folder structure.

---
## Folder

Core Layers in React
Domain: Pure business entities (e.g., Todo interface) and abstract repositories; platform-agnostic rules.​

Data: Concrete repository implementations, API data sources (e.g., TodoAPIDataSourceImpl mapping entities to domain models), mappers.​

Presentation/App: React views, hooks/view models (e.g., TodoListViewModel invoking use cases), actions/reducers for UI events.​​

Core: Shared utilities, constants, DI setup.​

Folder Structure Example
```bash
src/
├── Core/          # Constants, utils

├── Domain/        # Entities, Repos (interfaces), UseCases

├── Data/          # Repo impls, DataSources, API/DB entities

└── Presentation/  # Views, ViewModels, Components , custome hooks
```


## 🚀 Tech Stack

| Technology | Role |
|-----------|-------|
| **Bun** | Runtime + Package Manager + Dev Server |
| **Vite** | Fast bundler & build tool |
| **React 19** | UI library |
| **React Router** | Routing & navigation |
| **React Query / TanStack** | Server-state & caching |
| **Context API / Redux Toolkit** | App state management |
| **TailwindCSS** | Styling & UI |
| **Axios / Fetch** | API requests |
| **ESLint / Prettier** | Code quality & formatting |

---

## ✨ Modern React Features Included
- 🧠 **React Server Components**
- 🎯 **Suspense & Error Boundaries**
- 💤 **Lazy Loading & Code Splitting**
- ⚡ **useTransition / useDeferredValue**
- 🔁 **useReducer & useContext**
- 💾 **React Query for async caching & optimistic UI**
- ♻ **React memo, useMemo, useCallback**
- 🧱 **Custom Hooks Architecture**
- 🧭 **Reusable UI Components**

---

## 📦 Installation

### **Clone Repository**
```bash
git clone https://github.com/Jayaram-Venkat/padre-ginos-pizza.git
cd padre-ginos-pizza
