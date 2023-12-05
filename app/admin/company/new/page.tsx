import UploadButton from "@/app/components/UploadButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate =0

export default function NewCompany({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    const urlImage = searchParams?.url || '';

    async function saveCompany(formData: FormData){
        "use server"
        const name = formData.get("name") as string;
        const telephone = formData.get("telephone") as string;
        await sql`INSERT INTO companies (name, telephone) VALUES(${name}, ${telephone})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className=" text-center text-4xl">Cadastrar Novas Empresas</h1>
            <form>
                <Input type="text" name="name" placeholder="Digite o Nome da Empresa"/><br/>
                <Input type="text" name="telephone" placeholder="Digite o Telefone da Empresa"/> <br/>
                <br/>
                <UploadButton /> <br/>
                <Button formAction={saveCompany} className="text-white">Salvar</Button>
            </form>
        </div>

    )
}