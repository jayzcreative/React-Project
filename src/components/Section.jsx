export default function Section({ title, children, className = "", ...props }) {
  return (
    <section 
      {...props}
      // We use 'py-12' as a smaller default, but allow 'className' to override it
      className={`bg-slate-900/40 backdrop-blur-md py-12 px-6 rounded-3xl border border-white/5 shadow-2xl ${className}`}
    >
      <h2 className="text-center font-roboto text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-12">
        {title}
      </h2>
      {children}
    </section>
  );
}