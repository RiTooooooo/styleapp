import './App.css'

const NEXT_STEPS = [
  { id: 1, label: 'Define core features (outfit planner, wardrobe tracker, etc.)' },
  { id: 2, label: 'Add routing with React Router' },
  { id: 3, label: 'Set up state management (Zustand or Context API)' },
  { id: 4, label: 'Connect a backend / database (Supabase or Firebase)' },
  { id: 5, label: 'Style the UI with Tailwind CSS or shadcn/ui' },
  { id: 6, label: 'Add tests with Vitest' },
  { id: 7, label: 'Deploy to Vercel or Netlify' },
]

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>👗 styleapp</h1>
        <p className="subtitle">Your personal style, organised.</p>
      </header>
      <main>
        <section className="card">
          <h2>🚀 次のステップ / Next Steps</h2>
          <ol className="steps-list">
            {NEXT_STEPS.map((step) => (
              <li key={step.id}>{step.label}</li>
            ))}
          </ol>
        </section>
        <p className="hint">
          Edit <code>src/App.jsx</code> to start building your app.
        </p>
      </main>
    </div>
  )
}

export default App
