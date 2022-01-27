import '../../App.css'
import Carousel from '../Carousel'

function ProjectsBody() {
  return (
    <main>
      <div className="bg-gray-darker  pt-5 pb-10 flex justify-center" id="body">
        <div className="bg-gray-lightest w-4/5 h-full pt-5 rounded pb-10">
          <h1 className="text-gray-darkest text-center text-7xl">Projects</h1>
          <Carousel />
        </div>
      </div>
    </main>
  )
}

export default ProjectsBody
