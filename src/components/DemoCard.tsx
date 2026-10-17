import Link from "next/link";

export default function DemoCard ({ demo }: { demo: { route?: string; stack: string; description: string } }) {

  if  (!demo.route) {
    return (
      <div className="stack-link cursor-not-allowed opacity-50">
        <span className="stack">{demo.stack}</span>
        <h3><code>{demo.route}</code></h3>
        <p>{demo.description}</p>
        <span className="status">Planned</span>
      </div>
    );
  } 

  return ( 
    <Link href={demo.route} className="stack-link block -m-6 rounded-xl p-6 transition-colors hover:bg-slate-700">
      <span className="stack">{demo.stack}</span>
      <h3><code>{demo.route}</code></h3>
      <p>{demo.description}</p>
      <span className="status">Live</span>
    </Link> 
  );
}
