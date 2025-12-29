import { useGetCategoriesQuery } from '../services/categoryApiReducer'

const Dashboard = () => {
  const {data, isLoading, error} = useGetCategoriesQuery({})
  console.log("data",data)
  console.log(isLoading)
  console.log(error)
  console.log(import.meta.env.VITE_SERVER_URL)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard