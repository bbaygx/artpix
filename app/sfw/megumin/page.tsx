
"use client";

import { useState, useEffect } from 'react';
import { useFetchData } from "../../hooks/useFetch"
import { AiOutlineReload } from 'react-icons/ai';


export default function Megumin() {

  const [toggle, setToggle] = useState<Boolean>(false)

  const { data, isLoading, isError, isSuccess, refetch } = useFetchData('sfw', 'megumin', 30); // Mengambil 30 gambar

  useEffect(()=> {
    refetch()
  },[toggle])

  if (isSuccess) {

    const handleModalShow = (i: number) => {
      const modal = document.getElementById(`my_modal_${i}`) as HTMLDialogElement;
      modal.showModal();
    };

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {data.map((data: any, i: number) => (
            <div  key={i} onClick={() =>  handleModalShow(i)}>

              <img src={data} alt="" className="hover:shadow-xl hover:duration-200" />
              <dialog id={`my_modal_${i}`} className="modal">
                <div className="modal-box p-0">
                  <img src={data} alt="" className="hover:shadow-xl hover:duration-200" />
                  {/* <p className="py-4">Press ESC key or click outside to close</p> */}
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ))}
        <button className='fixed bottom-14 right-14 rounded-full text-white bg-zinc-800 p-4' onClick={()=>setToggle(!toggle)}>
          <AiOutlineReload size={25}/>
        </button>
        </div>
      </>
    )
  }
}
