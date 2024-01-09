import CategoryPills from "./components/CategoryPills"
import { categories } from "./components/data/categories"
import PageHeader from "./layouts/PageHeader"



function App() {

  return (
    <div>
      {/* <h1 className='text-4xl text-center my-10 font-semibold'>WebTube</h1> */}
      <PageHeader/>
      <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
        <div>
            Sidebar
        </div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
