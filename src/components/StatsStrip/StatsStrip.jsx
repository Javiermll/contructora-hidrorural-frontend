import "./StatsStrip.css";

const stats = [
  { number: "+200", label: "Familias beneficiadas" },
  { number: "5",    label: "Servicios especializados" },
  { number: "2",    label: "Regiones cubiertas" },
  { number: "100%", label: "Obras entregadas" },
];

function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-grid-bg" aria-hidden="true" />
      <div className="stats-inner">
        {stats.map((stat, i) => (
          <div key={stat.label} className="stats-item-wrapper">
            <div className="stats-item">
              <span className="stats-number">{stat.number}</span>
              <span className="stats-label">{stat.label}</span>
            </div>
            {i < stats.length - 1 && (
              <span className="stats-divider" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsStrip;
