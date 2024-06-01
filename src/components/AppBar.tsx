import {Searchbar} from './Searchbar'

export function AppBar() {
  return (
    <div>
        <div className="flex justify-between items-center px-5 my-2 ">
            <div className="text-lg font-bold ">Youtube</div>
            <div className=""><Searchbar></Searchbar></div>
            <div className="px-4 py-2 border-[1px] border-gray-500 text-blue-50 bg-zinc-800 rounded-full ">Sign In</div>
        </div>
    </div>
  )
}
