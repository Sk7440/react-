import './App.css'
import { FaCartPlus } from "react-icons/fa6";
import data from './components/Data';
import Sidebar from './components/Sidebar';
import { useContext } from 'react';
import { context } from './components/Contextapi';
function App() {
  const { sideBar, setSidebar } = useContext(context)
  const { cart, setCart } = useContext(context)
  function openBar(id) {
    console.log(id);

    setSidebar(true)

    let clicked = data.find((ele) => {
      return ele.id == id
    })
    setCart([...cart, {...clicked, qty: 1}])



  }

  return (
    <>
      <div>
        <Sidebar />
        <section className="min-h-screen bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 text-neutral-100">
          <div className="max-w-7xl mx-auto">
            <header className="mb-10 flex justify-between text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white">Featured Gear</h2>
              <FaCartPlus onClick={() => { openBar() }} className='text-4xl' />
            </header>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.map((product) => (
                <article
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-xl hover:shadow-black/50"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-800">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-neutral-950/80 px-2.5 py-1 text-xs font-medium tracking-wide text-neutral-300 backdrop-blur-md border border-neutral-700/50">
                      {product.category.split('/')[0].trim()}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between pt-4">
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-indigo-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-400">{product.category}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-neutral-800/80 pt-4">
                      <div>
                        <span className="text-xs text-neutral-500 block">Price</span>
                        <span className="text-lg font-bold text-white">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => { openBar(product.id) }}
                        type="button"
                        className="inline-flex items-center justify-center rounded-lg bg-neutral-100 px-3.5 py-2 text-xs font-semibold text-neutral-900 shadow-sm transition-all hover:bg-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
