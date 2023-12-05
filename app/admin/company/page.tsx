import { Button } from "@/components/ui/button";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCompanies() {
    async function deleteCompany(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from companies where id=${id}`
        revalidatePath("/admin/company")
    }
    const { rows } = await sql`SELECT * from companies`;
    return (
        <div>
            <h1 className="text-center ">Lista de Empresas</h1>

            <table>
                <thead>
                    <tr> <td>Nome da Empresa</td> <td>Telefone</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((company) => {
                            return (
                                <tr key={company.id}><td>{company.name}</td> <td>{company.telephone}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={company.id}/>   
                                    <Button variant= "destructive"
                                     formAction={deleteCompany}>Excluir</Button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}