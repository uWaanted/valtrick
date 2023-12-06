import Companies from "./components/Companies";

export const revalidate=0

export default function Home() {
  return (
    <div className="bg-[#892CDC]">
      <div className="max-w-[1440px] m-auto ">
    <Companies />

    </div>
      </div>
  )
}
