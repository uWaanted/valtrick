import { sql } from "@vercel/postgres";

export default async function Companies() {
    
    // const courses = [
    //     { title: "Curso de HTML", url: "/img/html.svg", description: "O curso é realizado por..." },
    //     { title: "Curso de CSS", url: "/img/css.svg", description: "O curso CSS é realizado por..." },
    //     { title: "Curso de JS", url: "/img/js.svg", description: "O curso JSS é realizado por..." }
    // ]
    //<a href="/companies.html"> </a>
    const { rows } = await sql`SELECT * from companies`;
    console.log(rows)
    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                <h2 id="companies">
                    CONHEÇA NOSSAS <span>EMPRESAS</span>
                </h2>
            </div>
            {
                rows.map((company) => {
                    return (
                        <div key={company.id} className="bg-[#4d4d4d] rounded-md pb-2">
                            
                                <div className="text-white text-center">
                                    <h3>{company.name}</h3>
                                    <p>{company.telephone}</p>
                                </div>
                            
                        </div>
                    )
                })
            }
        </main>
  )
}