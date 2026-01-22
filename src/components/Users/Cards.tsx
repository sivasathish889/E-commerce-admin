import type { UserCardType } from "../../@types/types"

const Cards = ({ id, title, value, percentage,status }: UserCardType) => {
  return (
    <div className="card shadow-sm border border-gray-200 p-6 rounded-xl w-48 bg-white h-32" key={id}>
      <div className="card-header space-y-2 flex flex-col justify-center">
        <p className="text-base opacity-65">{title}</p>
        <p className="text-lg">{value}</p>
        <p className={`text-sm opacity-65 ${status === "UP" ? "text-green-500" : "text-red-500"}`}>{percentage}</p>
      </div>
    </div>
  )
}

export default Cards