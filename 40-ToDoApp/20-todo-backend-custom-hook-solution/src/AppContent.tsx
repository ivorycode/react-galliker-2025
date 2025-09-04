import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

export function AppContent() {
  return (
    <section className="todoapp">
      <div className="nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Pending
        </NavLink>
        <NavLink
          to="/done"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Done
        </NavLink>
      </div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
}
