/* src/index.tsx */
// import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = createSignal(true);

  return (
    <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside
        class={`${
          sidebarOpen() ? "w-64" : "w-20"
        } bg-white dark:bg-gray-800 shadow-md transition-all duration-300`}
      >
        <div class="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h1 class={`${sidebarOpen() ? "block" : "hidden"} text-xl font-bold`}>
            Admin
          </h1>
          <button
            class="text-gray-500 dark:text-gray-300"
            onClick={() => setSidebarOpen(!sidebarOpen())}
          >
            ☰
          </button>
        </div>
        <nav class="p-4 space-y-2">
          <a
            href="#"
            class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Dashboard
          </a>
          <a
            href="#"
            class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Users
          </a>
          <a
            href="#"
            class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main class="flex-1 flex flex-col">
        {/* Header */}
        <header class="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-sm">
          <h2 class="text-xl font-semibold">Dashboard</h2>
          <button
            class="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={() =>
              document.documentElement.classList.toggle("dark")
            }
          >
            Toggle Theme
          </button>
        </header>

        {/* Content */}
        <section class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 class="text-lg font-bold mb-2">Users</h3>
            <p class="text-2xl font-semibold">1,240</p>
          </div>

          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 class="text-lg font-bold mb-2">Revenue</h3>
            <p class="text-2xl font-semibold">$12,400</p>
          </div>

          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 class="text-lg font-bold mb-2">Orders</h3>
            <p class="text-2xl font-semibold">320</p>
          </div>
        </section>
      </main>
    </div>
  );
}
